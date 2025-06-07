import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

export default async function NotFound() {
    const t = await getTranslations('NotFound');

    return (
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            minHeight={600}
            gap='10px'
            paddingTop='50px'
        >
            <Image
                src='/sadImage.svg'
                alt='error pic'
                width={200}
                height={200}
            />
            <Typography fontSize={48} fontFamily='SenFont'>
                404
            </Typography>
            <Typography fontSize={32} fontFamily='SenFont'>
                {t('Title')}
            </Typography>
            <Link href='/'>{t('ReturnHome')}</Link>
        </Box>
    );
}
