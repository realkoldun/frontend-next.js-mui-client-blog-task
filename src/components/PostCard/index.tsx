import Image from 'next/image';

import styles from './postCard.module.scss';

import { imageConfig } from '@/components/PostCard/config';

interface PostCardProps {
    type: string;
    title: string;
    description: string;
    imgUrl: string;
}

export default function PostCard(post: PostCardProps) {
    const { title, type, description, imgUrl } = post;
    return (
        <section className={styles['post-card__section']}>
            <div className={styles['post-card__image-container']}>
                <Image src={imgUrl} alt={title} {...imageConfig} />
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
