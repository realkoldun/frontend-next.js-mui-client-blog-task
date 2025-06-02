import { ResponseData } from '@/types';

const MAX_CACHE_LIFE = 3000;

export async function safeFetch(url: string): Promise<ResponseData[] | null> {
    try {
        const response = await fetch(url, {
            next: { revalidate: MAX_CACHE_LIFE },
        });
        if (!response.ok) {
            throw new Error(
                `Fetch error: ${response.status} ${response.statusText}`,
            );
        }
        return (await response.json()).data as ResponseData[];
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        return null;
    }
}
