import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import * as style from './styled';

import { categories } from '@/constants/categories';
import { Categories } from '@/types';

interface SmallCategoryCardInterface {
    categoryTitle: Categories;
    translation: (key: string) => string;
}

export default async function SmallCategoryCard({
    categoryTitle,
    translation,
}: SmallCategoryCardInterface) {
    const category = categories.find(({ title }) => title === categoryTitle);

    if (!category) return null;

    return (
        <Box {...style.section}>
            <Box {...style.imageContainer}>
                <Image
                    src={translation(`Categories.${category.title}.imgUrl`)}
                    alt={translation(`Categories.${category.title}.title`)}
                    {...style.imageStyle}
                />
            </Box>
            <Typography {...style.title}>
                {translation(`Categories.${category.title}.title`)}
            </Typography>
        </Box>
    );
}
