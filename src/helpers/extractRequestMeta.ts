import { headers } from 'next/headers';

import { ExtractRequestMetaReturnValue } from '@/types';

export async function extractRequestMeta(): Promise<ExtractRequestMetaReturnValue> {
    const headersList = await headers();
    const host = headersList.get('host') || 'localhost:3000';
    const protocol = host.includes('localhost') ? 'http' : 'https';

    return { host, protocol };
}
