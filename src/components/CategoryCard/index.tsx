import { MouseEvent } from 'react';

import Image from 'next/image';
import { useTranslations } from 'use-intl';

import styles from './categoryCard.module.scss';

import { imageConfig } from '@/components/CategoryCard/config';
import { CategoriesType } from '@/types';

interface CategoryCardProps {
    category: CategoriesType;
    isSelected: boolean;
    onClick: (category: CategoriesType) => void;
}

export default function CategoryCard(props: CategoryCardProps) {
    const { category, isSelected, onClick } = props;
    const { title } = category;
    const t = useTranslations('Categories');

    const handleOnClick = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        onClick(category);
    };

    return (
        <section
            onClick={handleOnClick}
            className={isSelected ? styles.selectedSection : styles.section}
        >
            <div className={styles.container}>
                <div className={styles.image}>
                    <Image
                        src={t(`${title}.imgUrl`)}
                        alt={t(`${title}.title`)}
                        {...imageConfig}
                    />
                </div>
                <p className={styles.title}>{t(`${title}.title`)}</p>
                <p className={styles.description}>
                    {t(`${title}.description`)}
                </p>
            </div>
        </section>
    );
}
