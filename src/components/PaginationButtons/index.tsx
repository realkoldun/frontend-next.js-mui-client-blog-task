'use client';

import { Box, Button } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'use-intl';

import * as style from './styled';

export default function PaginationButtons() {
    const t = useTranslations('HomePage');
    const searchParams = useSearchParams();
    const router = useRouter();

    const currentPage = Number(searchParams.get('page')) || 1;

    const handleOnClickNextPage = () => {
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set('page', String(currentPage + 1));
        router.push(`?${newParams.toString()}`);
    };

    const handleOnClickPrevPage = () => {
        if (currentPage > 0) {
            const newParams = new URLSearchParams(searchParams.toString());
            newParams.set('page', String(currentPage - 1));
            router.push(`?${newParams.toString()}`);
        }
    };

    return (
        <Box {...style.section}>
            <Button
                {...style.button}
                disabled={currentPage <= 1}
                onClick={handleOnClickPrevPage}
            >
                {t('Pagination.Prev')}
            </Button>
            <Button {...style.button} onClick={handleOnClickNextPage}>
                {t('Pagination.Next')}
            </Button>
        </Box>
    );
}
