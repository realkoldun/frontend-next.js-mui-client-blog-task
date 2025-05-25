'use server';

import { headers } from 'next/headers';

import posts from '@/constants/posts.json';
import { PostType } from '@/types';

export async function getPostsByCategory(
    category: string,
): Promise<PostType[]> {
    const headersList = await headers();
    const host = headersList.get('host') || 'localhost:3000';
    const protocol = host.includes('localhost') ? 'http' : 'https';

    const response = await fetch(
        `${protocol}://${host}/api/posts?category=${category}`,
    );
    return await response.json();
}

export async function getPosts() {
    return posts as PostType[];
}

export async function getPostBuId(id: string) {
    const headersList = await headers();
    const host = headersList.get('host') || 'localhost:3000';
    const protocol = host.includes('localhost') ? 'http' : 'https';

    const response = await fetch(`${protocol}://${host}/api/posts/${id}`);
    return await response.json();
}
