import { getLocale } from 'next-intl/server';

import CategoriesList from '@/components/CategoriesList';
import FeaturePost from '@/components/FeaturePost';
import PostList from '@/components/PostList';
import { extractSearchParams } from '@/helpers';
import { SearchParams } from '@/types';

interface HomePageProps {
    searchParams?: SearchParams;
}

export default async function HomePage({ searchParams }: HomePageProps) {
    const params = await extractSearchParams(searchParams);
    const lang = await getLocale();

    return (
        <main>
            <FeaturePost {...params} locale={lang} />
            <PostList {...params} locale={lang} />
            <CategoriesList />
        </main>
    );
}
