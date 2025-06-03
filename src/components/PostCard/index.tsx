'use server';

import Image from 'next/image';
import Link from 'next/link';
import { getLocale, getTranslations } from 'next-intl/server';

import normalStyles from './postCard.module.scss';
import smallStyles from './smallPostCard.module.scss';

import { checkImage } from '@/api';
import { imageConfig } from '@/components/PostCard/config';
import { PATHS } from '@/constants/paths';
import { formatDate } from '@/helpers';
import { PostType } from '@/types';

interface PostCardProps {
    post: PostType;
    isSuggestionCard?: boolean;
}

export default async function PostCard({
    post,
    isSuggestionCard,
}: PostCardProps) {
    const {
        uuid,
        title,
        source,
        category,
        description,
        image_url,
        published_at,
    } = post;

    const locale = await getLocale();

    const categoryTranslation = await getTranslations(`Categories.${category}`);
    const postTranslation = await getTranslations('HomePage.PostCard');

    const currentStyle = isSuggestionCard ? smallStyles : normalStyles;

    const { resultImageUrl, blurUrl } = await checkImage(image_url);

    return (
        <Link href={PATHS.POST + uuid} className={currentStyle.section}>
            <div className={currentStyle.imageContainer}>
                <Image
                    src={resultImageUrl}
                    alt={title}
                    {...imageConfig}
                    blurDataURL={blurUrl}
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className={currentStyle.informationContainer}>
                {isSuggestionCard ? (
                    <div className={currentStyle.infoContainer}>
                        <p className={currentStyle.metaInfo}>
                            {postTranslation('ByAuthor')}{' '}
                            <span className={currentStyle.authorSpan}>
                                {source}
                            </span>
                        </p>
                        <div className={currentStyle.verticalDevider}></div>
                        <p className={currentStyle.metaInfo}>
                            {formatDate(published_at, locale)}
                        </p>
                    </div>
                ) : (
                    <p className={normalStyles.category}>
                        {categoryTranslation('title')}
                    </p>
                )}
                <p className={currentStyle.title}>{title}</p>
                <p className={smallStyles.description}>{description}</p>
            </div>
        </Link>
    );
}
