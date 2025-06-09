import { Box, Typography } from '@mui/material';

import * as style from './styled';

import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/constants/categories';

interface CategoriesListProps {
    translation: (key: string) => string;
}

export default async function CategoriesList({
    translation,
}: CategoriesListProps) {
    return (
        <Box {...style.categoryListSection}>
            <Box {...style.container}>
                <Typography {...style.title}>
                    {translation('CategoryList.SectionTitle')}
                </Typography>
                <Box {...style.list}>
                    {categories.map(({ id, title }) => (
                        <CategoryCard key={id} title={title} />
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
