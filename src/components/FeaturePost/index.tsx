import Image from 'next/image';

import styles from './featurePost.module.scss';

import { imageConfig } from '@/components/FeaturePost/config';
import StyledButton from '@/components/StyledButton';

interface FeaturePostComponentProps {
    title: string;
    author: string;
    date: string;
    description: string;
    imgUrl: string;
}

export default function FeaturePost(post: FeaturePostComponentProps) {
    const { author, description, imgUrl, date, title } = post;
    return (
        <article className={styles.featurePostSection}>
            <div className={styles.featurePostContainer}>
                <div className={styles.informationSection}>
                    <div className={styles.informationContainer}>
                        <p className={styles.sectionTitle}>Feature post</p>
                        <h2 className={styles.title}>{title}</h2>
                        <div className={styles.infoContainer}>
                            <p className={styles.metaInfo}>
                                By{' '}
                                <span className={styles.authorSpan}>
                                    {author}
                                </span>
                            </p>
                            <div className={styles.verticalDevider}></div>
                            <p className={styles.metaInfo}>{date}</p>
                        </div>
                        <p className={styles.descriptionText}>{description}</p>
                    </div>
                    <StyledButton text='Read more >'></StyledButton>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src={imgUrl}
                        alt='feature post image'
                        {...imageConfig}
                    />
                </div>
            </div>
        </article>
    );
}
