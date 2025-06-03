import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import * as style from './styled';

import SmallCategoryCard from '@/components/SmallCategoryCard';
import { formatDate } from '@/helpers';
import type { PostType } from '@/types';
import { Categories } from '@/types';

interface PostHeaderProps {
    post: PostType;
    locale: string;
    translation: (key: string) => string;
}

export default async function PostHeader({
    post,
    locale,
    translation,
}: PostHeaderProps) {
    const { category, title, source, published_at, image_url, keywords } = post;

    return (
        <Box {...style.postHeaderSection}>
            <Box {...style.metaInfoContainer}>
                <Image
                    src={image_url}
                    alt='avatar'
                    width={48}
                    height={48}
                    {...style.image}
                />
                <Box {...style.metaInfoTextContainer}>
                    <Typography {...style.authorName}>{source}</Typography>
                    <Typography {...style.dateText}>
                        {translation('PostHeader.Date')}{' '}
                        {formatDate(published_at, locale)}
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Typography {...style.titleText}>{title}</Typography>
            </Box>
            <Link replace href={`/?category=${category}`}>
                <SmallCategoryCard categoryTitle={category as Categories} />
            </Link>
            {keywords && (
                <Typography {...style.dateText}>{keywords}</Typography>
            )}
        </Box>
    );
}
