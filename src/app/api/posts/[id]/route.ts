'use server';

import { NextResponse } from 'next/server';

import posts from '@/constants/posts.json';

export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> },
) {
    try {
        const { id } = await params;
        const post = posts.find((p) => p.id === id);

        if (!post) {
            return NextResponse.json(
                { error: 'Post not found' },
                { status: 404 },
            );
        }

        return NextResponse.json(post);
    } catch (e) {
        console.log(e);
    }
}
