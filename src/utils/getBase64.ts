'use server';

import { getPlaiceholder } from 'plaiceholder';

export async function getBase64(imgUrl: string): Promise<string> {
    try {
        const response = await fetch(imgUrl);

        if (!response.ok) {
            throw new Error(`Failed to fetch image: ${response.statusText}`);
        }

        const buffer = await response.arrayBuffer();
        console.log('bebeb', buffer);
        const { base64 } = await getPlaiceholder(Buffer.from(buffer));

        return base64;
    } catch (e: unknown) {
        if (e instanceof Error) return e.message;
        else if (e && typeof e === 'object' && 'message' in e)
            return e.message as string;
        else if (typeof e === 'string') return e;
        else return 'Unexpected error!';
    }
}
