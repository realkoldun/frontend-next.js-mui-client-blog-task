'use server';

import { headers } from 'next/headers';

import { PostType } from '@/types';

export async function getPostsByCategory(
    category: string,
    //page: string,
): Promise<PostType[]> {
    const headersList = await headers();
    const host = headersList.get('host') || 'localhost:3000';
    const protocol = host.includes('localhost') ? 'http' : 'https';

    const response = await fetch(
        `${protocol}://${host}/api/posts?category=${category}`,
    );
    return await response.json();
}

interface GetAllPostsArgs {
    category: string;
    page: string;
    lang: string;
}

type ResponseData = Omit<PostType, 'category'> & {
    categories: string;
};

export async function getAllPosts(args: GetAllPostsArgs): Promise<PostType[]> {
    const { category, lang, page } = args;
    const response = await fetch(
        `https://api.thenewsapi.com/v1/news/all?api_token=${process.env.NEWS_API_KEY}&categories=${category.toLowerCase()}&page=${page}&language=${lang}&limit=3`,
    );

    const posts = (await response.json()).data as ResponseData[];
    return posts.map((post) => {
        return {
            ...post,
            category,
        };
    }) as PostType[];
}

export async function getPostBuId(id: string) {
    const headersList = await headers();
    const host = headersList.get('host') || 'localhost:3000';
    const protocol = host.includes('localhost') ? 'http' : 'https';

    const response = await fetch(`${protocol}://${host}/api/posts/${id}`);
    return await response.json();
}
