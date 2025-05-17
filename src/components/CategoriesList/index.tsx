import styles from './categoriesList.module.scss';

import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/constants/categories';
import contentSectionStyle from '@/styles/contentSection.module.scss';

export default function CategoriesList() {
    return (
        <section className={contentSectionStyle['content-section']}>
            <div className={styles.container}>
                <h2 className={styles.title}>All Categories</h2>
                <div className={styles.list}>
                    {categories.map((category) => {
                        return (
                            <CategoryCard
                                key={category.id}
                                {...category}
                                isSelected={category.id === '2'}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
