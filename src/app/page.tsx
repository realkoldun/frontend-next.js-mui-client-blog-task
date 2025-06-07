import { lazy, Suspense } from 'react';

import { getLocale, getTranslations } from 'next-intl/server';

import { getAllPosts, getFeaturePost } from '@/api';
import FeaturePost from '@/components/FeaturePost';
import PostList from '@/components/PostList';
import { extractSearchParams } from '@/helpers';
import { SearchParams } from '@/types';

const CategoriesList = lazy(() => import('@/components/CategoriesList'));

interface HomePageProps {
    searchParams?: SearchParams;
}

export default async function HomePage({ searchParams }: HomePageProps) {
    const { category, page } = await extractSearchParams(searchParams);
    const locale = await getLocale();
    const t = await getTranslations('HomePage');

    const [postsData, featurePost] = await Promise.all([
        getAllPosts(category, page, locale),
        getFeaturePost(category, locale),
    ]);

    return (
        <main>
            <FeaturePost
                featurePost={featurePost}
                locale={locale}
                translation={t}
            />
            <PostList postsData={postsData} translation={t} />
            <Suspense>
                <CategoriesList translation={t} />
            </Suspense>
        </main>
    );
}
