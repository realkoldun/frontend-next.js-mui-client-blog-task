'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslations } from 'use-intl';

import * as style from './styled';

import { imageConfig } from '@/components/CategoryCard/config';
import { categories } from '@/constants/categories';
import { useUrlParams } from '@/hooks';
import { Categories } from '@/types';

interface CategoryCardProps {
    title: Categories;
}

export default function CategoryCard({ title }: CategoryCardProps) {
    const t = useTranslations('Categories');
    const [currentCategory, setCategoryToUrl] = useUrlParams('category', true);

    const selectedCategory =
        categories.find((category) => category.title === currentCategory)
            ?.title || Categories.GENERAL;

    const handleOnClick = (): void => setCategoryToUrl(title);

    return (
        <Box
            onClick={handleOnClick}
            {...style.categoryCardSection(title === selectedCategory)}
        >
            <Box {...style.container}>
                <Box {...style.image}>
                    <Image
                        src={t(`${title}.imgUrl`)}
                        alt={t(`${title}.title`)}
                        {...imageConfig}
                    />
                </Box>
                <Typography {...style.title}>{t(`${title}.title`)}</Typography>
                <Typography {...style.description}>
                    {t(`${title}.description`)}
                </Typography>
            </Box>
        </Box>
    );
}
