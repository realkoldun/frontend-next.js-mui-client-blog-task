import defaultImageConfig from '@/constants/defaultImageConfig';

export const imageConfig = {
    ...defaultImageConfig,
    priority: true,
    alt: 'post img',
    style: { objectFit: 'cover' as const, display: 'block' as const },
};
