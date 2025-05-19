'use client';

import Image from 'next/image';

import styles from './postCard.module.scss';

import { imageConfig } from '@/components/PostCard/config';

interface PostCardProps {
    id: string;
    type: string;
    title: string;
    description: string;
    imgUrl: string;
}

export default function PostCard(post: PostCardProps) {
    const { title, type, description, imgUrl } = post;

    return (
        <section className={styles.section}>
            <div className={styles.imageContainer}>
                <Image src={imgUrl} alt={title} {...imageConfig} />
            </div>
            <div className={styles.informationContainer}>
                <p className={styles.category}>{type}</p>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
            </div>
        </section>
    );
}
