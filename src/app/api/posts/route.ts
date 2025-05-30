'use server';

import { NextResponse } from 'next/server';

import posts from '@/constants/posts.json';

export async function GET(req: Request) {
    try {
        const url = new URL(req.url);
        const category = url.searchParams.get('category');
        //const page = url.searchParams.get('page');

        if (category) {
            return NextResponse.json(
                posts.filter((post) => post.category === category),
            );
        }

        return NextResponse.json(posts);
    } catch (e) {
        console.log(e);
    }
}
