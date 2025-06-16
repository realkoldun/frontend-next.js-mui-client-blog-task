import { categories } from '@/constants/categories';
import { CategoriesType } from '@/types';

export function getDefaultCategory(categoryTitle?: string): CategoriesType {
    if (!categoryTitle) return categories[0];

    return (
        categories.find((category) => category.title === categoryTitle) ??
        categories[0]
    );
}
