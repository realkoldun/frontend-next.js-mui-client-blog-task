import Image from 'next/image';

import styles from './postCard.module.scss';

interface PostCardProps {
    type: string;
    title: string;
    description: string;
    imgUrl: string;
}

export default function PostCard({
    title,
    type,
    description,
    imgUrl,
}: PostCardProps) {
    return (
        <section className={styles['post-card__section']}>
            <div className={styles['post-card__image-container']}>
                <Image
                    src={imgUrl}
                    alt={title}
                    fill
                    placeholder={'blur'}
                    blurDataURL={'/blurPlaceholder.png'}
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
            </div>
            <div className={styles['post-card__information-container']}>
                <p className={styles['post-card__type']}>{type}</p>
                <p className={styles['post-card__title']}>{title}</p>
                <p className={styles['post-card__description']}>
                    {description}
                </p>
            </div>
        </section>
    );
}
