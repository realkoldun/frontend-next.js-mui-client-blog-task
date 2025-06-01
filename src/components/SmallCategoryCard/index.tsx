import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import * as style from './styled';

import { categories } from '@/constants/categories';
import { Categories } from '@/types';

interface SmallCategoryCardInterface {
    categoryTitle: Categories;
}

export default async function SmallCategoryCard({
    categoryTitle,
}: SmallCategoryCardInterface) {
    const category = categories.find(({ title }) => title === categoryTitle);

    if (!category) return null;

    const t = await getTranslations(`Categories.${category.title}`);

    return (
        <Box {...style.section}>
            <Box {...style.imageContainer}>
                <Image
                    src={t('imgUrl')}
                    alt={t('title')}
                    {...style.imageStyle}
                />
            </Box>
            <Typography {...style.title}>{t('title')}</Typography>
        </Box>
    );
}
