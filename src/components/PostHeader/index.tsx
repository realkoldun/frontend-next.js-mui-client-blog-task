import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { getLocale, getTranslations } from 'next-intl/server';

import * as style from './styled';

import SmallCategoryCard from '@/components/SmallCategoryCard';
import { formatDate } from '@/helpers';
import type { PostType } from '@/types';
import { Categories } from '@/types';

interface PostHeaderProps {
    post: PostType;
}

export default async function PostHeader({ post }: PostHeaderProps) {
    const { category, title, source, published_at, image_url } = post;

    const t = await getTranslations('PostPage.PostHeader');
    const locale = await getLocale();

    return (
        <Box {...style.postHeaderSection}>
            <Box {...style.metaInfoContainer}>
                <Image
                    src={image_url}
                    alt='avatar'
                    width={48}
                    height={48}
                    style={{ borderRadius: '50%' }}
                />
                <Box {...style.metaInfoTextContainer}>
                    <Typography {...style.authorName}>{source}</Typography>
                    <Typography {...style.dateText}>
                        {t('Date')} {formatDate(published_at, locale)}
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Typography {...style.titleText}>{title}</Typography>
            </Box>
            <Link replace href={`/?category=${category}`}>
                <SmallCategoryCard categoryTitle={category as Categories} />
            </Link>
        </Box>
    );
}
