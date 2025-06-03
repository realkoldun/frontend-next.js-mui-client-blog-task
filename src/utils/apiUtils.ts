'use server';

import { formatString, safeFetch } from '@/helpers';
import { PostType, ResponseData } from '@/types';

const MAX_SUGGESTIONS = 3;
const MAX_STRING_LENGTH = 90;
const MAX_PAGES = 30;

export async function getSimilarPosts(
    id: string,
    lang: string,
    category: string,
): Promise<PostType[]> {
    const response = await safeFetch(
        `${process.env.NEWS_API_URL}/similar/${id}?api_token=${process.env.NEWS_API_KEY}&page=1&language=${lang}&limit=${MAX_SUGGESTIONS}`,
    );
    if (!response) return [];

    return response.responsePosts.map((post) => {
        delete post['categories'];
        return {
            ...post,
            title: formatString(post.title, MAX_STRING_LENGTH),
            description: formatString(post.description, MAX_STRING_LENGTH),
            category,
        };
    }) as PostType[];
}

interface GetAllPostsReturnValue {
    posts: PostType[];
    totalPages: number;
}

export async function getAllPosts(
    category: string,
    page: string,
    locale: string,
): Promise<GetAllPostsReturnValue> {
    const response = await safeFetch(
        `${process.env.NEWS_API_URL}/all?api_token=${process.env.NEWS_API_KEY}&categories=${category.toLowerCase()}&page=${page}&language=${locale}&limit=${MAX_SUGGESTIONS}`,
    );
    if (!response) return { posts: [], totalPages: 0 };

    const { responsePosts, meta } = response;

    const pages = Number(meta!.found) / MAX_SUGGESTIONS;

    const totalPages =
        pages > MAX_PAGES ? MAX_PAGES : parseInt(pages.toString());

    console.log(meta);

    const posts = responsePosts.map((post) => {
        delete post['categories'];
        return {
            ...post,
            title: formatString(post.title, MAX_STRING_LENGTH),
            description: formatString(post.description, MAX_STRING_LENGTH),
            category,
        };
    }) as PostType[];

    return { posts, totalPages };
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
    const response = await safeFetch(
        `${process.env.NEWS_API_URL}/top?api_token=${process.env.NEWS_API_KEY}&categories=${category.toLowerCase()}&page=1&language=${lang}&limit=1`,
    );
    if (!response) return null;

    const { responsePosts } = response;

    if (responsePosts.length === 0) return null;

    return {
        ...responsePosts[0],
        title: formatString(responsePosts[0].title, MAX_STRING_LENGTH),
        description: formatString(
            responsePosts[0].description,
            MAX_STRING_LENGTH,
        ),
        category: responsePosts[0].categories![0].toUpperCase(),
    };
}
