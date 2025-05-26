import { JSX } from 'react';

import { Box, Typography } from '@mui/material';

import * as style from './styled';

import PostCard from '@/components/PostCard';
import { getPostsByCategory } from '@/utils/apiUtils';

interface SuggestionsList {
    id: string;
    category: string;
}

const MAX_SUGGESTIONS = 3;

export default async function SuggestionsList({
    id,
    category,
}: SuggestionsList) {
    const postsByCategory = await getPostsByCategory(category);

    if (!postsByCategory) return null;

    const suggestionPosts = postsByCategory.reduce<JSX.Element[]>(
        (acc, post) => {
            if (post.id !== id && acc.length < MAX_SUGGESTIONS) {
                acc.push(
                    <PostCard key={post.id} isSuggestionCard post={post} />,
                );
            }
            return acc;
        },
        [],
    );

    if (suggestionPosts.length === 0) return null;

    return (
        <Box {...style.suggestionListContainer}>
            <Typography {...style.title}>
                What to read next on {category}
            </Typography>
            <Box {...style.suggestionsContainer}>{suggestionPosts}</Box>
        </Box>
    );
}
