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
        <article className={styles['feature-post-section']}>
            <div className={styles['feature-post-container']}>
                <div className={styles['information-section']}>
                    <div className={styles['information-container']}>
                        <p className={styles['section-title']}>Feature post</p>
                        <h2 className={styles['feature-post__title']}>
                            {title}
                        </h2>
                        <div className={styles['feature-post__info-container']}>
                            <p className={styles['feature-post__meta-info']}>
                                By{' '}
                                <span
                                    className={
                                        styles['feature-post__author-span']
                                    }
                                >
                                    {author}
                                </span>
                            </p>
                            <div className={styles['vertical-devider']}></div>
                            <p className={styles['feature-post__meta-info']}>
                                {date}
                            </p>
                        </div>
                        <p className={styles['feature-post__description-text']}>
                            {description}
                        </p>
                    </div>
                    <StyledButton text='Read more >'></StyledButton>
                </div>
                <div className={styles['feature-post__image-container']}>
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
