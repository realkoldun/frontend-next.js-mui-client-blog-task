'use client';

import { PropsWithChildren } from 'react';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

const cache = createCache({ key: 'css', prepend: true });

export default function EmotionProvider({ children }: PropsWithChildren) {
    return <CacheProvider value={cache}>{children}</CacheProvider>;
}
