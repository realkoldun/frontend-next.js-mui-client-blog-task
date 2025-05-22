import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import { categories } from '@/constants/categories';
import { Categories } from '@/types';

interface SmallCategoryCardInterface {
    categoryTitle: Categories;
}

export default function SmallCategoryCard({
    categoryTitle,
}: SmallCategoryCardInterface) {
    const category = categories.find(({ title }) => title === categoryTitle);

    if (!category) return null;

    return (
        <Box display='flex' width={150} gap={2}>
            <Image
                src={category.imgUrl}
                alt={category.title}
                width={24}
                height={24}
                style={{ borderRadius: '50%' }}
            />
            <Typography fontFamily='SenFont'>{category.title}</Typography>
        </Box>
    );
}
