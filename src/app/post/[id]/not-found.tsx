import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { notFoundImageConfig } from './config';
import * as style from './styled';

export default async function NotFound() {
    const t = await getTranslations('NotFound');

    return (
        <Box {...style.notFoundContainer}>
            <Image {...notFoundImageConfig} />
            <Typography {...style.notFoundCode}>404</Typography>
            <Typography {...style.notFoundText}>{t('Title')}</Typography>
            <Link href='/'>{t('ReturnHome')}</Link>
        </Box>
    );
}
