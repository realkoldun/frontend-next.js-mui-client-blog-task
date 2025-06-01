import styles from './categoriesList.module.scss';

import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/constants/categories';
import contentSectionStyle from '@/styles/contentSection.module.scss';

interface CategoriesListProps {
    translation: (key: string) => string;
}

export default async function CategoriesList({
    translation,
}: CategoriesListProps) {
    return (
        <section className={contentSectionStyle.contentSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    {translation('CategoryList.SectionTitle')}
                </h2>
                <div className={styles.list}>
                    {categories.map(({ id, title }) => {
                        return <CategoryCard key={id} title={title} />;
                    })}
                </div>
            </div>
        </section>
    );
}
