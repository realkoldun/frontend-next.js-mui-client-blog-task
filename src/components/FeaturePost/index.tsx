'use client';

import { MouseEvent } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'use-intl';

import styles from './featurePost.module.scss';

import { imageConfig } from '@/components/FeaturePost/config';
import StyledButton from '@/components/StyledButton';
import { PATHS } from '@/constants/paths';

interface FeaturePostComponentProps {
    id: string;
    title: string;
    author: string;
    date: string;
    description: string;
    imgUrl: string;
}

export default function FeaturePost(post: FeaturePostComponentProps) {
    const { id, author, description, imgUrl, date, title } = post;
    const router = useRouter();
    const t = useTranslations('HomePage.FeaturePost');

    const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push(PATHS.POST + id);
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
                            <p className={styles.metaInfo}>{date}</p>
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
                        src={imgUrl}
                        alt='feature post image'
                        {...imageConfig}
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>
        </article>
    );
}
