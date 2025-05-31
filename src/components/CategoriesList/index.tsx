import { getTranslations } from 'next-intl/server';

import styles from './categoriesList.module.scss';

import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/constants/categories';
import contentSectionStyle from '@/styles/contentSection.module.scss';

export default async function CategoriesList() {
    const t = await getTranslations('HomePage.CategoryList');

    return (
        <section className={contentSectionStyle.contentSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>{t('SectionTitle')}</h2>
                <div className={styles.list}>
                    {categories.map(({ id, title }) => {
                        return <CategoryCard key={id} title={title} />;
                    })}
                </div>
            </div>
        </section>
    );
}
