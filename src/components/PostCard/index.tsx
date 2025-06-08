import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { getLocale, getTranslations } from 'next-intl/server';

import * as style from './styled';

import { CheckImageReturnType } from '@/api/checkImage';
import { imageConfig } from '@/components/PostCard/config';
import { PATHS } from '@/constants/paths';
import { formatDate } from '@/helpers';
import { PostType } from '@/types';

interface PostCardProps {
    post: PostType;
    imageData: CheckImageReturnType;
    isSuggestionCard?: boolean;
}

export default async function PostCard({
    post,
    imageData,
    isSuggestionCard,
}: PostCardProps) {
    const { uuid, title, source, category, description, published_at } = post;

    const locale = await getLocale();

    const t = await getTranslations();

    const { resultImageUrl, blurUrl } = imageData;

    return (
        <Link href={PATHS.POST + uuid}>
            <Box
                {...(isSuggestionCard
                    ? style.smallPostSection
                    : style.postSection)}
            >
                <Box
                    {...(isSuggestionCard
                        ? style.smallImageContainer
                        : style.imageContainer)}
                >
                    <Image
                        src={resultImageUrl}
                        alt={title}
                        {...imageConfig}
                        {...style.image}
                        blurDataURL={blurUrl}
                    />
                </Box>
                <Box {...style.informationContainer}>
                    {isSuggestionCard ? (
                        <Box {...style.metaInfoContainer}>
                            <Typography {...style.metaInformation}>
                                {t('HomePage.PostCard.ByAuthor')}{' '}
                                <Typography {...style.authorSpan}>
                                    {source}
                                </Typography>
                            </Typography>
                            <Box {...style.divider}></Box>
                            <Typography {...style.metaInformation}>
                                {formatDate(published_at, locale)}
                            </Typography>
                        </Box>
                    ) : (
                        <Typography {...style.category}>
                            {t(`Categories.${category}.title`)}
                        </Typography>
                    )}
                    <Typography
                        {...(isSuggestionCard ? style.smallTitle : style.title)}
                    >
                        {title}
                    </Typography>
                    <Typography
                        {...(isSuggestionCard
                            ? style.smallDescription
                            : style.description)}
                    >
                        {description}
                    </Typography>
                </Box>
            </Box>
        </Link>
    );
}
