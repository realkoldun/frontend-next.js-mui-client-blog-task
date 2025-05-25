import { Box, Typography } from '@mui/material';

import PostCard from '@/components/PostCard';
import { styleConstants } from '@/constants/styles';
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

    const suggestionPosts = postsByCategory
        .filter((post) => post.id !== id)
        .slice(0, MAX_SUGGESTIONS)
        .map((post) => <PostCard key={post.id} isSuggestionCard post={post} />);

    if (suggestionPosts.length === 0) return null;

    return (
        <Box
            display='flex'
            flexDirection='column'
            width='100%'
            alignItems={{ md: '', xs: 'center' }}
            maxWidth={styleConstants.maxPageContainerWidth}
            minHeight={550}
            gap={2}
        >
            <Typography
                width={{ ms: '', xs: '100%' }}
                fontFamily='SenFontBold'
                fontSize={{ xs: 24, md: 36 }}
            >
                What to read next on {category}
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
                {suggestionPosts}
            </Box>
        </Box>
    );
}
