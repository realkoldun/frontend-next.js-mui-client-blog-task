import { JSX } from 'react';

import { Box, Typography } from '@mui/material';
import { getTranslations } from 'next-intl/server';

import * as style from './styled';

import PostCard from '@/components/PostCard';
import { getPostsByCategory } from '@/utils';

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

    const suggestionTranslation = await getTranslations(
        'PostPage.SuggestionPost',
    );
    const categoryTranslation = await getTranslations(`Categories.${category}`);

    const suggestionPosts = postsByCategory.reduce<JSX.Element[]>(
        (acc, post) => {
            if (post.uuid !== id && acc.length < MAX_SUGGESTIONS) {
                acc.push(
                    <PostCard key={post.uuid} isSuggestionCard post={post} />,
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
                {suggestionTranslation('SectionTitle')}{' '}
                {categoryTranslation('title')}
            </Typography>
            <Box {...style.suggestionsContainer}>{suggestionPosts}</Box>
        </Box>
    );
}
