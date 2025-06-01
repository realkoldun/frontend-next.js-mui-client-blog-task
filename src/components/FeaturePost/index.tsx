import { memo } from 'react';

import Image from 'next/image';

import styles from './featurePost.module.scss';

import { imageConfig } from '@/components/FeaturePost/config';
import ReadMoreButton from '@/components/FeaturePost/ReadMoreButton';
import { formatDate } from '@/helpers';
import { getFeaturePost } from '@/utils/apiUtils';

interface FeaturePostComponentProps {
    category: string;
    locale: string;
    translation: (key: string) => string;
}

async function FeaturePost({
    category,
    locale,
    translation,
}: FeaturePostComponentProps) {
    const featurePost = await getFeaturePost(category, locale);

    if (!featurePost) return null;

    const { uuid, source, description, published_at, image_url, title } =
        featurePost;

    return (
        <article className={styles.featurePostSection}>
            <div className={styles.featurePostContainer}>
                <div className={styles.informationSection}>
                    <div className={styles.informationContainer}>
                        <p className={styles.sectionTitle}>
                            {translation('FeaturePost.SectionTitle')}
                        </p>
                        <h2 className={styles.title}>{title}</h2>
                        <div className={styles.infoContainer}>
                            <p className={styles.metaInfo}>
                                {translation('FeaturePost.ByAuthor')}{' '}
                                <span className={styles.authorSpan}>
                                    {source}
                                </span>
                            </p>
                            <div className={styles.verticalDevider}></div>
                            <p className={styles.metaInfo}>
                                {formatDate(published_at, locale)}
                            </p>
                        </div>
                        <p className={styles.descriptionText}>{description}</p>
                    </div>
                    <ReadMoreButton uuid={uuid} />
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

export default memo(FeaturePost);
