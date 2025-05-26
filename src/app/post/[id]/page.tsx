import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import * as style from './styled';

import { imageConfig } from '@/app/post/[id]/config';
import PostHeader from '@/components/PostHeader';
import SuggestionsList from '@/components/SuggestionsList';
import { getPostBuId } from '@/utils/apiUtils';
import { getBase64 } from '@/utils/getBase64';

interface PostPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function PostPage({ params }: PostPageProps) {
    const { id } = await params;
    const post = await getPostBuId(id);

    if (!post) notFound();

    const blurImg = await getBase64(post.imgUrl);

    return (
        <Box {...style.postPageContainer}>
            <PostHeader {...post} />
            <Box {...style.imageContainer}>
                <Image
                    src={post.imgUrl}
                    {...imageConfig}
                    blurDataURL={blurImg}
                />
            </Box>
            <Box>
                <Typography {...style.mainText}>{post.text}</Typography>
            </Box>
            <SuggestionsList {...post} />
        </Box>
    );
}
