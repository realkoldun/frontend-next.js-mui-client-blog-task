import { lazy } from 'react';

import { getLocale, getTranslations } from 'next-intl/server';

import FeaturePost from '@/components/FeaturePost';
import PostList from '@/components/PostList';
import { extractSearchParams } from '@/helpers';
import { SearchParams } from '@/types';

const CategoriesList = lazy(() => import('@/components/CategoriesList'));

interface HomePageProps {
    searchParams?: SearchParams;
}

export default async function HomePage({ searchParams }: HomePageProps) {
    const params = await extractSearchParams(searchParams);
    const lang = await getLocale();
    const t = await getTranslations('HomePage');

    return (
        <main>
            <FeaturePost {...params} locale={lang} translation={t} />
            <PostList {...params} locale={lang} translation={t} />
            <CategoriesList translation={t} />
        </main>
    );
}
