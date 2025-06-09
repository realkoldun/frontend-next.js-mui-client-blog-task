import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import * as style from './styled';

import { checkImage } from '@/api';
import { imageConfig } from '@/components/FeaturePost/config';
import ReadMoreButton from '@/components/FeaturePost/ReadMoreButton';
import { formatDate } from '@/helpers';
import { PostType } from '@/types';

interface FeaturePostComponentProps {
    featurePost: PostType | null;
    locale: string;
    translation: (key: string) => string;
}

export default async function FeaturePost(props: FeaturePostComponentProps) {
    const { featurePost, locale, translation } = props;

    if (!featurePost) return null;

    const { uuid, source, description, published_at, image_url, title } =
        featurePost;

    const { resultImageUrl, blurUrl } = await checkImage(image_url);

    return (
        <Box {...style.featurePostSection}>
            <Box {...style.featurePostContainer}>
                <Box {...style.informationSection}>
                    <Box {...style.informationContainer}>
                        <Typography {...style.sectionTitle}>
                            {translation('FeaturePost.SectionTitle')}
                        </Typography>
                        <Typography {...style.title}>{title}</Typography>
                        <Box {...style.infoContainer}>
                            <Typography {...style.metaInfo}>
                                {translation('FeaturePost.ByAuthor')}{' '}
                                <Typography {...style.authorSpan}>
                                    {source}
                                </Typography>
                            </Typography>
                            <Box {...style.divider}></Box>
                            <Typography {...style.metaInfo}>
                                {formatDate(published_at, locale)}
                            </Typography>
                        </Box>
                        <Typography {...style.descriptionText}>
                            {description}
                        </Typography>
                    </Box>
                    <ReadMoreButton uuid={uuid} />
                </Box>
                <Box {...style.imageContainer}>
                    <Image
                        src={resultImageUrl}
                        {...imageConfig}
                        blurDataURL={blurUrl}
                        style={{ ...style.image }}
                    />
                </Box>
            </Box>
        </Box>
    );
}
