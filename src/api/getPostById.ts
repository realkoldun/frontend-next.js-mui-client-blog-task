import { categories } from '@/constants/categories';
import { Categories, PostType, ResponseData } from '@/types';

export async function getPostById(id: string): Promise<PostType | null> {
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
        const category =
            categories.find(
                ({ title }) => title === responsePost.categories![0],
            )?.title ?? Categories.GENERAL;
        return {
            ...responsePost,
            category: category.toUpperCase(),
        };
    } catch (error) {
        console.error(`Error fetching post by ID ${id}:`, error);
        return null;
    }
}
