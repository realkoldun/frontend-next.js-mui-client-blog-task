import defaultImageConfig from '@/constants/defaultImageConfig';
import { theme } from '@/styles/theme';

export const imageConfig = {
    ...defaultImageConfig,
    priority: true,
    alt: 'post img',
    style: { objectFit: 'cover' as const, display: 'block' as const },
};

export const notFoundImageConfig = {
    src: '/sadImage.svg',
    alt: 'error pic',
    width: theme.sizes.xs,
    height: theme.sizes.xs,
};
