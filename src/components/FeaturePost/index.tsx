import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import styles from './featurePost.module.scss';

import { imageConfig } from '@/components/FeaturePost/config';
import ReadMoreButton from '@/components/FeaturePost/ReadMoreButton';
import { formatDate } from '@/helpers';
import { getFeaturePost } from '@/utils/apiUtils';

interface FeaturePostComponentProps {
    category: string;
    locale: string;
}

export default async function FeaturePost({
    category,
    locale,
}: FeaturePostComponentProps) {
    const featurePost = await getFeaturePost(category, locale);

    if (!featurePost) return null;

    const { uuid, source, description, published_at, image_url, title } =
        featurePost;

    const t = await getTranslations('HomePage.FeaturePost');

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
