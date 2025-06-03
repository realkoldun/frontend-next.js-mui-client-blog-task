import { MAX_STRING_LENGTH } from '@/api/config';
import { formatString, safeFetch } from '@/helpers';
import { PostType } from '@/types';

export async function getFeaturePost(
    category: string,
    lang: string,
): Promise<PostType | null> {
    const response = await safeFetch(
        `${process.env.NEWS_API_URL}/top?api_token=${process.env.NEWS_API_KEY}&categories=${category.toLowerCase()}&page=1&language=${lang}&limit=1`,
    );
    if (!response) return null;

    const { responsePosts } = response;

    if (responsePosts.length === 0) return null;

    return {
        ...responsePosts[0],
        title: formatString(responsePosts[0].title, MAX_STRING_LENGTH),
        description: formatString(
            responsePosts[0].description,
            MAX_STRING_LENGTH,
        ),
        category: responsePosts[0].categories![0].toUpperCase(),
    };
}
