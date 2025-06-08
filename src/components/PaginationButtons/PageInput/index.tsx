import { ChangeEvent, useState } from 'react';

import { Box, Button, TextField } from '@mui/material';

import * as style from '@/components/PaginationButtons/styled';

interface PageInputProps {
    totalPages: number;
    navigate: (page: number) => void;
    buttonSize: 'small' | 'medium';
}

export default function PageInput({
    navigate,
    totalPages,
    buttonSize,
}: PageInputProps) {
    const [inputPage, setInputPage] = useState<string>('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setInputPage(event.target.value);
    };

    const handleGoToPage = (): void => {
        const page = Number(inputPage);
        if (!isNaN(page) && page >= 1 && page <= totalPages) {
            navigate(page);
            setInputPage(String(page));
        }
    };

    const checkInput = (): boolean =>
        inputPage.trim() === '' ||
        isNaN(Number(inputPage)) ||
        Number(inputPage) < 1 ||
        Number(inputPage) > totalPages;

    return (
        <Box {...style.pageSelectionContainer}>
            <TextField
                {...style.pageInputField}
                value={inputPage}
                onChange={handleInputChange}
                inputProps={{ min: 1, max: totalPages }}
            />
            <Button
                {...style.button}
                size={buttonSize}
                disabled={checkInput()}
                onClick={handleGoToPage}
            >
                Перейти
            </Button>
        </Box>
    );
}
