import { Box, Typography } from '@mui/material';

import * as style from './styled';

import { checkImage, getSimilarPosts } from '@/api';
import PostCard from '@/components/PostCard';

interface SuggestionsList {
    //posts: PostType[] | null;
    id: string;
    locale: string;
    category: string;
    translation: (key: string) => string;
}

export default async function SuggestionsList(props: SuggestionsList) {
    const { id, locale, category, translation } = props;
    const posts = await getSimilarPosts(id, locale, category);
    if (posts.length === 0) return null;

    const postsImages = await Promise.all(
        posts.map(({ image_url }) => checkImage(image_url)),
    );

    const suggestionPosts = posts.map((post, index) => (
        <PostCard
            imageData={postsImages[index]}
            key={post.uuid}
            isSuggestionCard
            post={post}
        />
    ));

    if (suggestionPosts.length === 0) return null;

    return (
        <Box {...style.suggestionListContainer}>
            <Typography {...style.title}>
                {translation('PostPage.SuggestionPost.SectionTitle')}{' '}
                {translation(`Categories.${category}.title`)}
            </Typography>
            <Box {...style.suggestionsContainer}>{suggestionPosts}</Box>
        </Box>
    );
}
