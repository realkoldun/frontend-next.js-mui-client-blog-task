'use client';

import { MouseEvent } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useTranslations } from 'use-intl';

import normalStyles from './postCard.module.scss';
import smallStyles from './smallPostCard.module.scss';

import { imageConfig } from '@/components/PostCard/config';
import { PATHS } from '@/constants/paths';
import { formatDate } from '@/helpers';
import { PostType } from '@/types';

interface PostCardProps {
    post: PostType;
    isSuggestionCard?: boolean;
}

export default function PostCard({ post, isSuggestionCard }: PostCardProps) {
    const {
        uuid,
        title,
        source,
        category,
        description,
        image_url,
        published_at,
    } = post;
    const router = useRouter();
    const locale = useLocale();
    const categoryTranslation = useTranslations(`Categories.${category}`);
    const postTranslation = useTranslations('HomePage.PostCard');

    const handleOnClick = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        router.push(PATHS.POST + uuid);
    };

    const currentStyle = isSuggestionCard ? smallStyles : normalStyles;

    return (
        <section className={currentStyle.section} onClick={handleOnClick}>
            <div className={currentStyle.imageContainer}>
                <Image
                    src={image_url}
                    alt={title}
                    {...imageConfig}
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
        </section>
    );
}
