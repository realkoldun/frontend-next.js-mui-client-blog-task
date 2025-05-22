import { useContext } from 'react';

import { Box, Typography } from '@mui/material';

import PostCard from '@/components/PostCard';
import { posts } from '@/constants/posts';
import { constants } from '@/constants/styles';
import { PostContext } from '@/context/PostContext';

const MAX_SUGGESTIONS = 3;

export default function SuggestionsList() {
    const currentPost = useContext(PostContext);

    if (!currentPost) return null;

    return (
        <Box
            display='flex'
            flexDirection='column'
            width='100%'
            maxWidth={constants.maxPageContainerWidth}
            minHeight={550}
            gap={2}
        >
            <Typography fontFamily='SenFontBold' fontSize={{ xs: 24, md: 36 }}>
                What to read next on {currentPost.category}
            </Typography>
            <Box
                display='flex'
                flexDirection={{ md: 'row', xs: 'column' }}
                overflow-y='scroll'
                alignItems={{ md: '', xs: 'center' }}
                justifyContent='space-around'
                width='fit-content'
                max-width='100%'
                gap={{ md: 10, xs: 5 }}
            >
                {posts
                    .map((post) => {
                        if (
                            post.category === currentPost.category &&
                            post.id !== currentPost.id
                        )
                            return (
                                <PostCard key={post.id} isSmall post={post} />
                            );
                        else return null;
                    })
                    .filter((post) => post)
                    .slice(0, MAX_SUGGESTIONS)}
            </Box>
        </Box>
    );
}
