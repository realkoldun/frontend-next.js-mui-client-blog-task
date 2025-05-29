'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslations } from 'use-intl';

import * as style from './styled';

import { useTimeout } from '@/hooks';

interface ModalWindowProps {
    message: string;
    description: string;
    onClose: () => void;
    error?: boolean;
}

const TIMER_DELAY: number = 3000;

export default function ModalWindow(props: ModalWindowProps) {
    const t = useTranslations('ModalWindow');
    const { message, description, onClose, error } = props;

    useTimeout({ callback: onClose, ms: TIMER_DELAY });

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
