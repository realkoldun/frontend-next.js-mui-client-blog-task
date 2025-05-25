import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import { imageConfig } from '@/app/post/[id]/config';
import PostHeader from '@/components/PostHeader';
import SuggestionsList from '@/components/SuggestionsList';
import { PostType } from '@/types';
import { getPostBuId } from '@/utils/apiUtils';
import { getBase64 } from '@/utils/getBase64';

interface PostPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function PostPage({ params }: PostPageProps) {
    const { id } = await params;
    const post: PostType = await getPostBuId(id);

    if (!post) return null;

    const blurImg = await getBase64(post?.imgUrl);
    return (
        <Box
            component='main'
            display='flex'
            flexDirection={'column'}
            alignItems='center'
            padding='20px'
            gap={{ xs: 3, md: 5 }}
            margin={2}
        >
            <PostHeader {...post} />
            <Box
                width='100%'
                height={{ xs: 300, sm: 400, md: 500 }}
                position='relative'
                maxWidth={{
                    md: 1500,
                    xs: '100%',
                }}
            >
                <Image
                    src={post.imgUrl}
                    alt='post img'
                    {...imageConfig}
                    blurDataURL={blurImg}
                    style={{ objectFit: 'cover' }}
                />
            </Box>
            <Box>
                <Typography maxWidth={800}>{post.text}</Typography>
            </Box>
            <SuggestionsList {...post} />
        </Box>
    );
}
