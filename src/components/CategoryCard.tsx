import Image from 'next/image';

import styles from '@/styles/categoryCard.module.scss';

interface CategoryCardProps {
    imgUrl: string;
    title: string;
    description: string;
    isSelected: boolean;
}

export default function CategoryCard({
    imgUrl,
    title,
    description,
    isSelected,
}: CategoryCardProps) {
    return (
        <section
            className={
                styles[`category__section${isSelected ? '__selected' : ''}`]
            }
        >
            <div className={styles.category__container}>
                <div className={styles['category__image-container']}>
                    <Image
                        src={imgUrl}
                        alt={title}
                        fill
                        placeholder={'blur'}
                        blurDataURL={'/blurPlaceholder.png'}
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    />
                </div>
                <p className={styles.category__name}>{title}</p>
                <p className={styles.category__description}>{description}</p>
            </div>
        </section>
    );
}
