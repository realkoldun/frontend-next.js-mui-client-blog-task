import { Response, ResponseData, ResponseMeta } from '@/types';

interface SafeFetchReturnValue {
    responsePosts: ResponseData[];
    meta?: ResponseMeta;
}

export async function safeFetch(
    url: string,
): Promise<SafeFetchReturnValue | null> {
    try {
        const response = await fetch(url, {
            cache: 'force-cache',
        });
        if (!response.ok) {
            throw new Error(
                `Fetch error: ${response.status} ${response.statusText}`,
            );
        }
        const data = (await response.json()) as Response;

        return {
            responsePosts: data.data as ResponseData[],
            meta: data.meta as ResponseMeta,
        };
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        return null;
    }
}
