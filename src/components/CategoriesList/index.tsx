'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';
import { useTranslations } from 'use-intl';

import styles from './categoriesList.module.scss';

import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/constants/categories';
import contentSectionStyle from '@/styles/contentSection.module.scss';
import { CategoriesType } from '@/types';

interface CategoryListProps {
    currentCategory: CategoriesType;
}

export default function CategoriesList({ currentCategory }: CategoryListProps) {
    const t = useTranslations('HomePage.CategoryList');

    const [selectedCategory, setSelectedCategory] =
        useState<CategoriesType>(currentCategory);
    const router = useRouter();

    const handleCategorySelect = (category: CategoriesType) => {
        setSelectedCategory(category);
        router.push(`?category=${category.title}`);
    };

    return (
        <section className={contentSectionStyle.contentSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>{t('SectionTitle')}</h2>
                <div className={styles.list}>
                    {categories.map((category) => {
                        return (
                            <CategoryCard
                                key={category.id}
                                category={category}
                                onClick={handleCategorySelect}
                                isSelected={category.id === selectedCategory.id}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
