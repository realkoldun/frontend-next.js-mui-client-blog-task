import { MAX_PAGES, MAX_STRING_LENGTH, MAX_SUGGESTIONS } from '@/api/config';
import { formatString, safeFetch } from '@/helpers';
import { PostType } from '@/types';

interface GetAllPostsReturnValue {
    posts: PostType[];
    totalPages: number;
}

export async function getAllPosts(
    category: string,
    page: string,
    locale: string,
): Promise<GetAllPostsReturnValue> {
    const response = await safeFetch(
        `${process.env.NEWS_API_URL}/all?api_token=${process.env.NEWS_API_KEY}&categories=${category.toLowerCase()}&page=${page}&language=${locale}&limit=${MAX_SUGGESTIONS}`,
    );
    if (!response) return { posts: [], totalPages: 0 };

    const { responsePosts, meta } = response;

    const pages = Number(meta!.found) / MAX_SUGGESTIONS;

    const totalPages =
        pages > MAX_PAGES ? MAX_PAGES : parseInt(pages.toString());

    const posts = responsePosts.map((post) => {
        delete post['categories'];
        return {
            ...post,
            title: formatString(post.title, MAX_STRING_LENGTH),
            description: formatString(post.description, MAX_STRING_LENGTH),
            category,
        };
    }) as PostType[];

    return { posts, totalPages };
}
