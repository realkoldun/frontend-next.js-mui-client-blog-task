'use server';

import { getPlaiceholder } from 'plaiceholder';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
const IMAGE_ON_ERROR = (await import('../../public/imageOnError.png')).default;

const errorImageData = {
    resultImageUrl: IMAGE_ON_ERROR.src,
    blurUrl: IMAGE_ON_ERROR.blurDataURL!,
};

export interface CheckImageReturnType {
    resultImageUrl: string;
    blurUrl: string;
}

export async function checkImage(url: string): Promise<CheckImageReturnType> {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const imgBuffer = await response.arrayBuffer();
            const { base64 } = await getPlaiceholder(Buffer.from(imgBuffer));
            return { resultImageUrl: url, blurUrl: base64 };
        } else {
            return { ...errorImageData };
        }
    } catch {
        return { ...errorImageData };
    }
}
