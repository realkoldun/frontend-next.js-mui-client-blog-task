'use server';

import { PostType, ResponseData } from '@/types';

const MAX_SUGGESTIONS = 3;

async function safeFetch(url: string): Promise<ResponseData[] | null> {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(
                `Fetch error: ${response.status} ${response.statusText}`,
            );
        }
        return (await response.json()).data as ResponseData[];
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        return null;
    }
}

export async function getSimilarPosts(
    id: string,
    lang: string,
    category: string,
): Promise<PostType[]> {
    const responsePosts = await safeFetch(
        `${process.env.NEWS_API_URL}/similar/${id}?api_token=${process.env.NEWS_API_KEY}&page=1&language=${lang}&limit=${MAX_SUGGESTIONS}`,
    );
    if (!responsePosts) return [];

    return responsePosts.map((post) => {
        delete post['categories'];
        return {
            ...post,
            category,
        };
    }) as PostType[];
}

export async function getAllPosts(
    category: string,
    page: string,
    locale: string,
): Promise<PostType[]> {
    const url = `${process.env.NEWS_API_URL}/all?api_token=${process.env.NEWS_API_KEY}&categories=${category.toLowerCase()}&page=${page}&language=${locale}&limit=3`;

    const responsePosts = await safeFetch(url);
    if (!responsePosts) return [];

    return responsePosts.map((post) => {
        delete post['categories'];
        return {
            ...post,
            category,
        };
    }) as PostType[];
}

export async function getPostBuId(id: string): Promise<PostType | null> {
    try {
        const response = await fetch(
            `${process.env.NEWS_API_URL}/uuid/${id}?api_token=${process.env.NEWS_API_KEY}`,
        );
        if (!response.ok) {
            throw new Error(
                `Fetch error: ${response.status} ${response.statusText}`,
            );
        }
        const responsePost = (await response.json()) as ResponseData;

        return {
            ...responsePost,
            category: responsePost.categories![0].toUpperCase(),
        };
    } catch (error) {
        console.error(`Error fetching post by ID ${id}:`, error);
        return null;
    }
}

export async function getFeaturePost(
    category: string,
    lang: string,
): Promise<PostType | null> {
    const url = `${process.env.NEWS_API_URL}/top?api_token=${process.env.NEWS_API_KEY}&categories=${category.toLowerCase()}&page=1&language=${lang}&limit=1`;

    const responsePosts = await safeFetch(url);
    if (!responsePosts || responsePosts.length === 0) return null;

    return {
        ...responsePosts[0],
        category: responsePosts[0].categories![0].toUpperCase(),
    };
}
