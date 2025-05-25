'use server';

import fs from 'node:fs/promises';
import { getPlaiceholder } from 'plaiceholder';

export async function getBase64(imgUrl: string): Promise<string> {
    try {
        const file = await fs.readFile(`public/${imgUrl}`);
        const { base64 } = await getPlaiceholder(file);
        return base64;
    } catch (e: unknown) {
        if (e instanceof Error) return e.message;
        else if (e && typeof e === 'object' && 'message' in e)
            return e.message as string;
        else if (typeof e === 'string') return e;
        else return 'Unexpected error!';
    }
}
