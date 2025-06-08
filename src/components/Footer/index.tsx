'use client';

import { FormEvent, useState, useTransition } from 'react';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import { useTranslations } from 'use-intl';

import * as style from './styled';

import { emailSubmit } from '@/api';
import { imageConfig } from '@/components/Footer/config';
import ModalWindow from '@/components/ModalWindow';
import StyledButton from '@/components/StyledButton';
import { socialLinks } from '@/constants/socialLinks';
import { usePortal } from '@/hooks';
import { ModalWindowMessageType } from '@/types';

export default function Footer() {
    const t = useTranslations('FooterSection');

    const [message, setMessage] = useState<ModalWindowMessageType | null>(null);
    const [pending, startTransition] = useTransition();

    const modalRef = usePortal('modal-window-container');

    const [isModalWindowOpen, setModalWindowOpen] = useState<boolean>(false);

    const handleOpenModalWindow = () => {
        setModalWindowOpen(true);
    };

    const handleCloseModalWindow = () => {
        setModalWindowOpen(false);
    };

    const handleEmailSubmit = async (
        e: FormEvent<HTMLFormElement>,
    ): Promise<void> => {
        e.preventDefault();

        startTransition(async (): Promise<void> => {
            const formData = new FormData(e.currentTarget);
            const result = await emailSubmit(formData);
            setMessage(result);
            handleOpenModalWindow();
        });
    };

    const isModalWindowShowed = message && modalRef && isModalWindowOpen;

    return (
        <Box {...style.section}>
            <Box {...style.subscribeContainer}>
                <Box {...style.subscribeTextContainer}>
                    <Typography {...style.subscribeText}>
                        {t('SubscribeText')}
                    </Typography>
                </Box>
                <Box onSubmit={handleEmailSubmit} {...style.inputContainer}>
                    <input
                        name='email'
                        placeholder={t('SubscribeInputPlaceholder')}
                        style={{ ...style.input }}
                    />
                    <StyledButton
                        disabled={pending}
                        submit
                        text={t('SubscribeButtonText')}
                        isWide={true}
                    />
                </Box>
            </Box>
            <Box {...style.infoContainer}>
                <Box>
                    <Typography>Finstreet 118 2561 Fintown</Typography>
                    <Typography>Hello@finsweet.com 020 7993 2905</Typography>
                </Box>
                <Box {...style.infoSocialsContainer}>
                    {socialLinks.map(({ id, title, imgUrl }) => (
                        <Image
                            key={id}
                            src={imgUrl}
                            alt={title}
                            {...imageConfig}
                        />
                    ))}
                </Box>
            </Box>
            {isModalWindowShowed &&
                createPortal(
                    <ModalWindow
                        {...message}
                        onClose={handleCloseModalWindow}
                    />,
                    modalRef,
                )}
        </Box>
    );
}
