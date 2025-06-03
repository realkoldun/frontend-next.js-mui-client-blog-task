'use client';

import { useMemo } from 'react';

import { Box, Button } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';

import * as style from './styled';

import { generatePagination } from '@/helpers';

interface PaginationButtonsProps {
    totalPages: number;
}

export default function PaginationButtons({
    totalPages,
}: PaginationButtonsProps) {
    const searchParams = useSearchParams();
    const router = useRouter();

    const currentPage = Number(searchParams.get('page')) || 1;

    const pagination = useMemo(
        () => generatePagination(currentPage, totalPages),
        [totalPages, currentPage],
    );

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

    const handleOnClickSelectedPage = (page: number) => {
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set('page', String(page));
        router.push(`?${newParams.toString()}`);
    };

    const pageNumbering = pagination.map((page, index) =>
        typeof page === 'number' ? (
            <Button
                {...style.button}
                key={index}
                variant={page === currentPage ? 'contained' : 'outlined'}
                onClick={() => handleOnClickSelectedPage(page)}
            >
                {page}
            </Button>
        ) : (
            <span key={index}>...</span>
        ),
    );

    return (
        <Box {...style.section}>
            <Button
                {...style.button}
                disabled={currentPage <= 1}
                onClick={handleOnClickPrevPage}
            >
                {'<'}
            </Button>
            {pageNumbering}
            <Button
                {...style.button}
                disabled={currentPage === totalPages}
                onClick={handleOnClickNextPage}
            >
                {'>'}
            </Button>
        </Box>
    );
}
