import Image from 'next/image';

import styles from './categoryCard.module.scss';

import { imageConfig } from '@/components/CategoryCard/config';

interface CategoryCardProps {
    imgUrl: string;
    title: string;
    description: string;
    isSelected: boolean;
}

export default async function CategoryCard(category: CategoryCardProps) {
    const { title, description, imgUrl, isSelected } = category;
    return (
        <section
            className={isSelected ? styles.selectedSection : styles.section}
        >
            <div className={styles.container}>
                <div className={styles.image}>
                    <Image src={imgUrl} alt={title} {...imageConfig} />
                </div>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
            </div>
        </section>
    );
}
