import Image from 'next/image';

import styles from './categoryCard.module.scss';

import { imageConfig } from '@/components/CategoryCard/config';

interface CategoryCardProps {
    imgUrl: string;
    title: string;
    description: string;
    isSelected: boolean;
}

export default function CategoryCard(category: CategoryCardProps) {
    const { title, description, imgUrl, isSelected } = category;
    return (
        <section
            className={
                styles[`category__section${isSelected ? '__selected' : ''}`]
            }
        >
            <div className={styles.category__container}>
                <div className={styles['category__image-container']}>
                    <Image src={imgUrl} alt={title} {...imageConfig} />
                </div>
                <p className={styles.category__name}>{title}</p>
                <p className={styles.category__description}>{description}</p>
            </div>
        </section>
    );
}
