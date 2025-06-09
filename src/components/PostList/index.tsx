import { Box, Divider, Typography } from '@mui/material';

import PaginationButtons from '../PaginationButtons';
import * as style from './styled';

import { checkImage } from '@/api';
import { GetAllPostsReturnValue } from '@/api/getAllPosts';
import PostCard from '@/components/PostCard';

interface PostListProps {
    postsData: GetAllPostsReturnValue;
    translation: (key: string) => string;
}

export default async function PostList(props: PostListProps) {
    const { translation, postsData } = props;
    const { posts, totalPages } = postsData;

    const postsImages = await Promise.all(
        posts.map(({ image_url }) => checkImage(image_url)),
    );

    return (
        <Box {...style.postListSection}>
            <Box {...style.postListContainer}>
                <Typography {...style.title}>
                    {translation('PostList.SectionTitle')}
                </Typography>
                <Divider {...style.line} />
                <Box {...style.listContainer}>
                    {posts.map((post, index) => (
                        <PostCard
                            imageData={postsImages[index]}
                            key={post.uuid}
                            post={post}
                        />
                    ))}
                </Box>
                <PaginationButtons totalPages={totalPages} />
            </Box>
        </Box>
    );
}
