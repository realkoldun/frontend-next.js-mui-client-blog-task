import { Box, Typography } from '@mui/material';
import { getLocale, getTranslations } from 'next-intl/server';

import * as style from './styled';

import PostCard from '@/components/PostCard';
import { getSimilarPosts } from '@/utils';

interface SuggestionsList {
    uuid: string;
    category: string;
}

export default async function SuggestionsList({
    uuid,
    category,
}: SuggestionsList) {
    const locale = await getLocale();
    const similarPosts = await getSimilarPosts(uuid, locale, category);

    if (!similarPosts) return null;

    const suggestionTranslation = await getTranslations(
        'PostPage.SuggestionPost',
    );
    const categoryTranslation = await getTranslations(`Categories.${category}`);

    const suggestionPosts = similarPosts.map((post) => (
        <PostCard key={post.uuid} isSuggestionCard post={post} />
    ));

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
