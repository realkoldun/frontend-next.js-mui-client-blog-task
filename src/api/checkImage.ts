'use server';

import * as fs from 'fs/promises';
import { getPlaiceholder } from 'plaiceholder';

const IMAGE_ON_ERROR = '/imageOnError.png';

interface CheckImageReturnType {
    resultImageUrl: string;
    blurUrl: string;
}

async function getImageOnErrorBlur() {
    const imgBuffer = await fs.readFile(IMAGE_ON_ERROR);
    const { base64 } = await getPlaiceholder(Buffer.from(imgBuffer));
    return base64;
}

export async function checkImage(url: string): Promise<CheckImageReturnType> {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const imgBuffer = await response.arrayBuffer();
            const { base64 } = await getPlaiceholder(Buffer.from(imgBuffer));
            return { resultImageUrl: url, blurUrl: base64 };
        } else {
            const blurUrl = await getImageOnErrorBlur();
            return { resultImageUrl: IMAGE_ON_ERROR, blurUrl };
        }
    } catch {
        const blurUrl = await getImageOnErrorBlur();
        return { resultImageUrl: IMAGE_ON_ERROR, blurUrl };
    }
}
