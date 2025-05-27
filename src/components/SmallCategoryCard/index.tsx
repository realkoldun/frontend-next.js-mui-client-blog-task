import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

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
        <Box
            display='flex'
            alignItems='center'
            width={{ xs: 120, md: 200 }}
            justifyContent='space-between'
        >
            <Box
                position='relative'
                width={{ xs: 24, md: 48 }}
                height={{ xs: 24, md: 40 }}
            >
                <Image
                    src={t('imgUrl')}
                    alt={t('title')}
                    fill
                    style={{ borderRadius: '50%' }}
                />
            </Box>

            <Typography
                fontFamily={{ xs: 'SenFont', md: 'SenFontBold' }}
                fontSize={{ xs: 14, md: 24 }}
            >
                {t('title')}
            </Typography>
        </Box>
    );
}
