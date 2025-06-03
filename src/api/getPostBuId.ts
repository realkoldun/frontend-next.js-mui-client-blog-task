import { PostType, ResponseData } from '@/types';

export async function getPostBuId(id: string): Promise<PostType | null> {
    try {
        const response = await fetch(
            `${process.env.NEWS_API_URL}/uuid/${id}?api_token=${process.env.NEWS_API_KEY}`,
        );
        if (!response.ok) {
            throw new Error(
                `Fetch error: ${response.status} ${response.statusText}`,
            );
        }
        const responsePost = (await response.json()) as ResponseData;
        return {
            ...responsePost,
            category: responsePost.categories![0].toUpperCase(),
        };
    } catch (error) {
        console.error(`Error fetching post by ID ${id}:`, error);
        return null;
    }
}
