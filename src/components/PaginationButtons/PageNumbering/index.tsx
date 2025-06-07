import { useMemo } from 'react';

import { Button } from '@mui/material';

import * as style from '@/components/PaginationButtons/styled';
import { generatePagination } from '@/helpers';

interface PageNumberingProps {
    currentPage: number;
    totalPages: number;
    isSmallPage: boolean | undefined;
    buttonSize: 'small' | 'medium';
    handleOnClick: (page: number) => void;
}

export default function PageNumbering({
    currentPage,
    totalPages,
    isSmallPage,
    buttonSize,
    handleOnClick,
}: PageNumberingProps) {
    const pagination = useMemo(
        () => generatePagination(currentPage, totalPages, isSmallPage),
        [totalPages, currentPage, isSmallPage],
    );

    return (
        <>
            {pagination.map((page, index) => {
                const isCurrentPage = page === currentPage;
                const buttonStyle = isCurrentPage
                    ? style.button
                    : style.smallButton;
                return typeof page === 'number' ? (
                    <Button
                        {...buttonStyle}
                        key={index}
                        size={buttonSize}
                        variant={isCurrentPage ? 'contained' : 'outlined'}
                        onClick={() => handleOnClick(page)}
                    >
                        {page}
                    </Button>
                ) : (
                    <span key={index}>...</span>
                );
            })}
        </>
    );
}
