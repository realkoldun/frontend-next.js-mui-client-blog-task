import { Box, Typography } from '@mui/material';
import { getTranslations } from 'next-intl/server';

import * as style from './styled';

import PostCard from '@/components/PostCard';
import { PostType } from '@/types';

interface SuggestionsList {
    posts: PostType[] | null;
    category: string;
    translation: (key: string) => string;
}

export default async function SuggestionsList({
    posts,
    category,
    translation,
}: SuggestionsList) {
    if (!posts) return null;
    const categoryTranslation = await getTranslations(`Categories.${category}`);

    const suggestionPosts = posts.map((post) => (
        <PostCard key={post.uuid} isSuggestionCard post={post} />
    ));

    if (suggestionPosts.length === 0) return null;

    return (
        <Box {...style.suggestionListContainer}>
            <Typography {...style.title}>
                {translation('SuggestionPost.SectionTitle')}{' '}
                {categoryTranslation('title')}
            </Typography>
            <Box {...style.suggestionsContainer}>{suggestionPosts}</Box>
        </Box>
    );
}
