import { Box, Typography } from '@mui/material';
import Image from 'next/image';

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
        <Box
            display='flex'
            justifyContent='center'
            flexDirection='column'
            maxWidth={800}
            minHeight={{ xs: 200, md: 300 }}
            gap={{ xs: 2, md: 5 }}
        >
            <Box display='flex' justifyContent='start' width='100%' gap={1}>
                <Image
                    src='/postTest2.png'
                    alt='avatar'
                    width={48}
                    height={48}
                    style={{ borderRadius: '50%' }}
                />
                <Box display='flex' flexDirection='column' alignItems='start'>
                    <Typography fontFamily='SenFont' color='#592EA9'>
                        {author}
                    </Typography>
                    <Typography fontFamily='SenFont' color='#6D6E76'>
                        Posted on {date}
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Typography
                    fontFamily='SenFontBold'
                    fontSize={{ xs: 18, md: 48 }}
                >
                    {title}
                </Typography>
            </Box>
            <SmallCategoryCard categoryTitle={category} />
        </Box>
    );
}
