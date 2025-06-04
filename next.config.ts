import withPlaiceholder from '@plaiceholder/next';
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    env: {
        EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID: process.env.EMAIL_TEMPLATE_ID,
        EMAIL_PUBLIC_KEY: process.env.EMAIL_PUBLIC_KEY,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '**',
            },
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    experimental: {
        reactCompiler: true,
    },
};
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(withPlaiceholder(nextConfig));
