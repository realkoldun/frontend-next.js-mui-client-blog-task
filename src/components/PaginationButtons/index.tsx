'use client';

import { useCallback } from 'react';

import { Box, Button } from '@mui/material';

import InputPage from './PageInput';
import * as style from './styled';

import PageNumbering from '@/components/PaginationButtons/PageNumbering';
import { useCheckScreenWidth, useUrlParams } from '@/hooks';
import { theme } from '@/styles/theme';

interface PaginationButtonsProps {
    totalPages: number;
}

export default function PaginationButtons({
    totalPages,
}: PaginationButtonsProps) {
    const { currentParam, setNewParam } = useUrlParams('page');

    const currentPage = Number(currentParam) || 1;

    const isSmallPage = useCheckScreenWidth({
        targetWidth: theme.screenSizes.mobile,
        isWider: false,
    });

    const buttonSize = isSmallPage ? 'small' : 'medium';

    const handleOnClickNextPage = (): void =>
        setNewParam(String(currentPage + 1));

    const handleOnClickPrevPage = (): void => {
        if (currentPage > 1) setNewParam(String(currentPage - 1));
    };

    const handleOnClickSelectedPage = useCallback(
        (page: number): void => setNewParam(String(page)),
        [setNewParam],
    );

    return (
        <Box {...style.section}>
            <Box {...style.pagesContainer}>
                <Button
                    {...style.button}
                    size={buttonSize}
                    disabled={currentPage <= 1}
                    onClick={handleOnClickPrevPage}
                >
                    {'<'}
                </Button>
                <PageNumbering
                    currentPage={currentPage}
                    totalPages={totalPages}
                    isSmallPage={isSmallPage}
                    buttonSize={buttonSize}
                    handleOnClick={handleOnClickSelectedPage}
                />
                <Button
                    size={buttonSize}
                    {...style.button}
                    disabled={currentPage === totalPages}
                    onClick={handleOnClickNextPage}
                >
                    {'>'}
                </Button>
            </Box>
            <InputPage
                totalPages={totalPages}
                navigate={handleOnClickSelectedPage}
                buttonSize={buttonSize}
            />
        </Box>
    );
}
