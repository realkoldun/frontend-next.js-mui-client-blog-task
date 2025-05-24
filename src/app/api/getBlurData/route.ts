'use server';

import { getBase64 } from '@/utils/getBase64';

export async function GET(req: Request): Promise<Response> {
    const { searchParams } = new URL(req.url);
    const imgUrl = searchParams.get('imgUrl');
    if (!imgUrl) return new Response('Missing imgUrl', { status: 400 });

    const blurDataURL = await getBase64(imgUrl);
    return new Response(JSON.stringify({ blurDataURL }), { status: 200 });
}
