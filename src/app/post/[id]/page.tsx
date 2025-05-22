'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useParams } from 'next/navigation';

import { imageConfig } from '@/app/post/[id]/config';
import PostHeader from '@/components/PostHeader';
import SuggestionsList from '@/components/SuggestionsList';
import { posts } from '@/constants/posts';
import { constants } from '@/constants/styles';
import { PostContext } from '@/context/PostContext';

export default function PostPage() {
    const { id } = useParams();

    const post = posts.find((post) => post.id === id);

    if (!post) return null;

    return (
        <PostContext.Provider value={post}>
            <Box
                component='main'
                display='flex'
                flexDirection={'column'}
                alignItems='center'
                padding='20px'
                gap={{ xs: 3, md: 5 }}
                margin={2}
            >
                <PostHeader />
                <Box
                    width='100%'
                    height={{ xs: 300, sm: 400, md: 500 }}
                    position='relative'
                    maxWidth={{
                        md: constants.maxPageContainerWidth,
                        xs: '100%',
                    }}
                >
                    <Image src={post.imgUrl} alt='post img' {...imageConfig} />
                </Box>
                <Box>
                    <Typography maxWidth={800}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Non blandit massa enim
                        nec. Scelerisque viverra mauris in aliquam sem. At risus
                        viverra adipiscing at in tellus. Sociis natoque
                        penatibus et magnis dis parturient montes. Ridiculus mus
                        mauris vitae ultricies leo. Neque egestas congue quisque
                        egestas diam. Risus in hendrerit gravida rutrum quisque
                        non. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Non blandit
                        massa enim nec. Scelerisque viverra mauris in aliquam
                        sem. At risus viverra adipiscing at in tellus. Sociis
                        natoque penatibus et magnis dis parturient montes.
                        Ridiculus mus mauris vitae ultricies leo. Neque egestas
                        congue quisque egestas diam. Risus in hendrerit gravida
                        rutrum quisque non. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Non blandit
                        massa enim nec. Scelerisque viverra mauris in aliquam
                        sem. At risus viverra adipiscing at in tellus. Sociis
                        natoque penatibus et magnis dis parturient montes.
                        Ridiculus mus mauris vitae ultricies leo. Neque egestas
                        congue quisque egestas diam. Risus in hendrerit gravida
                        rutrum quisque non. Lorem ipsum dolor sit amet Non
                        blandit massa enim nec scelerisque Neque egestas congue
                        quisque egestas Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Non blandit massa enim
                        nec. Scelerisque viverra mauris in aliquam sem. At risus
                        viverra adipiscing at in tellus. Sociis natoque
                        penatibus et magnis dis parturient montes. Ridiculus mus
                        mauris vitae ultricies leo. Neque egestas congue quisque
                        egestas diam. Risus in hendrerit gravida rutrum quisque
                        non. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Non blandit
                        massa enim nec. Scelerisque viverra mauris in aliquam
                        sem. At risus viverra adipiscing at in tellus. Sociis
                        natoque penatibus et magnis dis parturient montes.
                        Ridiculus mus mauris vitae ultricies leo. Neque egestas
                        congue quisque egestas diam. Risus in hendrerit gravida
                        rutrum quisque non.
                    </Typography>
                </Box>
                <SuggestionsList />
            </Box>
        </PostContext.Provider>
    );
}
