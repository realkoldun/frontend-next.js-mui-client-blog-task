'use client';

import { useEffect } from 'react';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslations } from 'use-intl';

import * as style from './styled';

interface ModalWindowProps {
    message: string;
    description: string;
    onClose: () => void;
    error?: boolean;
}

const TIMER_DELAY = 3000;

export default function ModalWindow(props: ModalWindowProps) {
    const t = useTranslations('ModalWindow');
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
                <Typography {...style.messageStyle}>{t(message)}</Typography>
                <Typography {...style.descriptionStyle}>
                    {t(description)}
                </Typography>
            </Box>
        </Box>
    );
}
