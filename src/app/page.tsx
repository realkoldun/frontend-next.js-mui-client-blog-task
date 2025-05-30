import { getLocale } from 'next-intl/server';

import CategoriesList from '@/components/CategoriesList';
import FeaturePost from '@/components/FeaturePost';
import PostList from '@/components/PostList';
import { getDefaultCategory } from '@/helpers';
import { getAllPosts } from '@/utils/apiUtils';

interface HomePageProps {
    searchParams?: Promise<{
        category?: string;
        page?: string;
    }>;
}

export default async function HomePage(props: HomePageProps) {
    const searchParams = await props.searchParams;
    const page = searchParams?.page || '1';
    const currentCategory = getDefaultCategory(searchParams?.category);
    const lang = await getLocale();
    const posts = await getAllPosts({
        category: currentCategory.title,
        page: page,
        lang,
    });

    console.log(posts);

    return (
        <main>
            <FeaturePost featurePost={posts[0]} />
            <PostList posts={posts} />
            <CategoriesList currentCategory={currentCategory} />
        </main>
    );
}
