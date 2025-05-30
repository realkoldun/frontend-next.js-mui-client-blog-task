'use client';

import { MouseEvent } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'use-intl';

import styles from './featurePost.module.scss';

import { imageConfig } from '@/components/FeaturePost/config';
import StyledButton from '@/components/StyledButton';
import { PATHS } from '@/constants/paths';
import { PostType } from '@/types';

interface FeaturePostComponentProps {
    featurePost: PostType;
}

export default function FeaturePost({
    featurePost,
}: FeaturePostComponentProps) {
    const { uuid, author, description, published_at, image_url, title } =
        featurePost;
    const router = useRouter();
    const t = useTranslations('HomePage.FeaturePost');

    const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push(PATHS.POST + uuid);
    };

    return (
        <article className={styles.featurePostSection}>
            <div className={styles.featurePostContainer}>
                <div className={styles.informationSection}>
                    <div className={styles.informationContainer}>
                        <p className={styles.sectionTitle}>
                            {t('SectionTitle')}
                        </p>
                        <h2 className={styles.title}>{title}</h2>
                        <div className={styles.infoContainer}>
                            <p className={styles.metaInfo}>
                                {t('ByAuthor')}{' '}
                                <span className={styles.authorSpan}>
                                    {author}
                                </span>
                            </p>
                            <div className={styles.verticalDevider}></div>
                            <p className={styles.metaInfo}>{published_at}</p>
                        </div>
                        <p className={styles.descriptionText}>{description}</p>
                    </div>
                    <StyledButton
                        onClick={handleOnClick}
                        text={t('ButtonText')}
                    ></StyledButton>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src={image_url}
                        alt='feature post image'
                        {...imageConfig}
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>
        </article>
    );
}
