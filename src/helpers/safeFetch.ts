import { ResponseData } from '@/types';

export async function safeFetch(url: string): Promise<ResponseData[] | null> {
    try {
        const response = await fetch(url, {
            cache: 'force-cache',
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
