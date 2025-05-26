import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import * as style from './styled';

import SmallCategoryCard from '@/components/SmallCategoryCard';
import type { Categories } from '@/types';

interface PostHeaderProps {
    title: string;
    category: Categories;
    author: string;
    date: string;
}

export default function PostHeader(post: PostHeaderProps) {
    const { category, title, author, date } = post;

    return (
        <Box {...style.postHeaderSection}>
            <Box {...style.metaInfoContainer}>
                <Image
                    src='/postTest2.png'
                    alt='avatar'
                    width={48}
                    height={48}
                    style={{ borderRadius: '50%' }}
                />
                <Box {...style.metaInfoTextContainer}>
                    <Typography {...style.authorName}>{author}</Typography>
                    <Typography {...style.dateText}>
                        Posted on {date}
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Typography {...style.titleText}>{title}</Typography>
            </Box>
            <SmallCategoryCard categoryTitle={category} />
        </Box>
    );
}
