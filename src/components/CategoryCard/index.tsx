'use client';

import { memo, MouseEvent } from 'react';

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'use-intl';

import styles from './categoryCard.module.scss';

import { imageConfig } from '@/components/CategoryCard/config';
import { categories } from '@/constants/categories';
import { Categories } from '@/types';

interface CategoryCardProps {
    title: Categories;
}

function CategoryCard({ title }: CategoryCardProps) {
    const t = useTranslations('Categories');
    const router = useRouter();
    const searchParams = useSearchParams();

    const currentCategory = searchParams.get('category');

    const selectedCategory =
        categories.find((category) => category.title === currentCategory)
            ?.title || Categories.GENERAL;

    const handleOnClick = (e: MouseEvent<HTMLDivElement>): void => {
        e.preventDefault();
        router.push(`?category=${title}`);
    };

    return (
        <section
            onClick={handleOnClick}
            className={
                title === selectedCategory
                    ? styles.selectedSection
                    : styles.section
            }
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

export default memo(CategoryCard);
