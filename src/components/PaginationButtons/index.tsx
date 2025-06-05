'use client';

import { useMemo } from 'react';

import { Box, Button } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';

import * as style from './styled';

import { configUrlParams, generatePagination } from '@/helpers';
import { useCheckScreenWidth } from '@/hooks';
import { theme } from '@/styles/theme';

interface PaginationButtonsProps {
    totalPages: number;
}

export default function PaginationButtons({
    totalPages,
}: PaginationButtonsProps) {
    const searchParams = useSearchParams();
    const router = useRouter();

    const currentPage = Number(searchParams.get('page')) || 1;

    const isSmallPage = useCheckScreenWidth({
        targetWidth: theme.screenSizes.mobile,
        isWider: false,
    });

    const pagination = useMemo(
        () => generatePagination(currentPage, totalPages, isSmallPage),
        [totalPages, currentPage, isSmallPage],
    );

    const buttonSize = isSmallPage ? 'small' : 'medium';

    const setUrlParams = configUrlParams(searchParams);

    const handleOnClickNextPage = (): void => {
        const newParams = setUrlParams('page', String(currentPage + 1));
        router.push(`?${newParams.toString()}`);
    };

    const handleOnClickPrevPage = (): void => {
        if (currentPage > 0) {
            const newParams = setUrlParams('page', String(currentPage - 1));
            router.push(`?${newParams.toString()}`);
        }
    };

    const handleOnClickSelectedPage = (page: number): void => {
        const newParams = setUrlParams('page', String(page));
        router.push(`?${newParams.toString()}`);
    };

    const pageNumbering = pagination.map((page, index) => {
        const isCurrentPage = page === currentPage;
        const buttonStyle = isCurrentPage ? style.button : style.smallButton;
        return typeof page === 'number' ? (
            <Button
                {...buttonStyle}
                key={index}
                size={buttonSize}
                variant={isCurrentPage ? 'contained' : 'outlined'}
                onClick={() => handleOnClickSelectedPage(page)}
            >
                {page}
            </Button>
        ) : (
            <span key={index}>...</span>
        );
    });

    return (
        <Box {...style.section}>
            <Button
                {...style.button}
                size={buttonSize}
                variant='outlined'
                disabled={currentPage <= 1}
                onClick={handleOnClickPrevPage}
            >
                {'<'}
            </Button>
            {pageNumbering}
            <Button
                size={buttonSize}
                variant='outlined'
                {...style.button}
                disabled={currentPage === totalPages}
                onClick={handleOnClickNextPage}
            >
                {'>'}
            </Button>
        </Box>
    );
}
