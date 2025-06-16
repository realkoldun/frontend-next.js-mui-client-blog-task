import { MAX_STRING_LENGTH, MAX_SUGGESTIONS } from '@/api/config';
import { formatString, safeFetch } from '@/helpers';
import { PostType } from '@/types';

export async function getSimilarPosts(
    id: string,
    lang: string,
    category: string,
): Promise<PostType[]> {
    const response = await safeFetch(
        `${process.env.NEWS_API_URL}/similar/${id}?api_token=${process.env.NEWS_API_KEY}&page=1&language=${lang}&limit=${MAX_SUGGESTIONS}`,
    );
    if (!response) return [];

    return response.responsePosts.map((post) => {
        delete post['categories'];
        return {
            ...post,
            title: formatString(post.title, MAX_STRING_LENGTH),
            description: formatString(post.description, MAX_STRING_LENGTH),
            category,
        };
    }) as PostType[];
}
