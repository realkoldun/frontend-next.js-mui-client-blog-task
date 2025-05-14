import Image from 'next/image';
import styles from '@/styles/featurePost.module.scss';
import StyledButton from '@/components/StyledButton';

interface FeaturePostComponentProps {
    title: string;
    author: string;
    date: string;
    description: string;
    imgUrl: string;
}

export default function FeaturePostComponent({
    title,
    author,
    description,
    imgUrl,
    date,
}: FeaturePostComponentProps) {
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
                        fill
                        alt='featurePostMockImg'
                        priority
                        placeholder={'blur'}
                        blurDataURL={'/blurPlaceholder.png'}
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    />
                </div>
            </div>
        </article>
    );
}
