'use client';

import { useTranslations } from 'use-intl';

import styles from './categoriesList.module.scss';

import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/constants/categories';
import contentSectionStyle from '@/styles/contentSection.module.scss';

export default function CategoriesList() {
    const t = useTranslations('HomePage.CategoryList');

    return (
        <section className={contentSectionStyle.contentSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>{t('SectionTitle')}</h2>
                <div className={styles.list}>
                    {categories.map((category) => {
                        return (
                            <CategoryCard
                                key={category.id}
                                {...category}
                                isSelected={category.id === '1'}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
