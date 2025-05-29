'use client';

import { useEffect } from 'react';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import * as style from './styled';

interface ModalWindowProps {
    message: string;
    description: string;
    onClose: () => void;
    error?: boolean;
}

const TIMER_DELAY = 3000;

export default function ModalWindow(props: ModalWindowProps) {
    const { message, description, onClose, error } = props;

    useEffect(() => {
        const timerId = setTimeout(onClose, TIMER_DELAY);

        return () => clearTimeout(timerId);
    }, [onClose]);

    return (
        <Box {...style.modalWindowContainer}>
            <Image
                src={
                    error ? 'icons/modal/error.svg' : 'icons/modal/success.svg'
                }
                {...style.imageConfig}
            />
            <Box>
                <Typography {...style.messageStyle}>{message}</Typography>
                <Typography {...style.descriptionStyle}>
                    {description}
                </Typography>
            </Box>
        </Box>
    );
}
