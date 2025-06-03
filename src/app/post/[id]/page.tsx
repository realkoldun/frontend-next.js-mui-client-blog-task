import { lazy } from 'react';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getLocale, getTranslations } from 'next-intl/server';

import * as style from './styled';

import { checkImage, getPostById, getSimilarPosts } from '@/api';
import { imageConfig } from '@/app/post/[id]/config';
import PostHeader from '@/components/PostHeader';

const SuggestionsList = lazy(() => import('@/components/SuggestionsList'));

interface PostPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function PostPage({ params }: PostPageProps) {
    const { id } = await params;
    const post = await getPostById(id);

    if (!post) notFound();

    const locale = await getLocale();

    const t = await getTranslations('PostPage');

    const { category, image_url, snippet, url } = post;

    const similarPosts = await getSimilarPosts(id, locale, category);

    const { resultImageUrl, blurUrl } = await checkImage(image_url);

    return (
        <Box {...style.postPageContainer}>
            <PostHeader post={post} locale={locale} translation={t} />
            <Box {...style.imageContainer}>
                <Image
                    src={resultImageUrl}
                    {...imageConfig}
                    blurDataURL={blurUrl}
                />
            </Box>
            <Box>
                <Typography {...style.mainText}>{snippet}</Typography>
            </Box>
            <Link href={url} target='_blank' rel='noopener noreferrer'>
                {t('ReadAll')}
            </Link>
            <SuggestionsList
                posts={similarPosts}
                category={category}
                translation={t}
            />
        </Box>
    );
}
