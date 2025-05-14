import ContentSection from '@/components/ContentSection';
import styles from '@//styles/categoriesList.module.scss';
import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/constants/categories';

export default function CategoriesList() {
    return (
        <ContentSection>
            <div className={styles['categories-list__container']}>
                <h2 className={styles['categories-list__title']}>
                    All Categories
                </h2>
                <div className={styles['categories-list__list-container']}>
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
        </ContentSection>
    );
}
