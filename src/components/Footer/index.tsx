'use client';

import { FormEvent, useState } from 'react';

import Image from 'next/image';
import { createPortal } from 'react-dom';
import { useTranslations } from 'use-intl';

import styles from './footer.module.scss';

import { imageConfig } from '@/components/Footer/config';
import ModalWindow from '@/components/ModalWindow';
import StyledButton from '@/components/StyledButton';
import { socialLinks } from '@/constants/socialLinks';
import { emailSubmit } from '@/helpers';
import { usePortal } from '@/hooks';
import { ModalWindowMessageType } from '@/types';

export default function Footer() {
    const t = useTranslations('FooterSection');

    const [message, setMessage] = useState<ModalWindowMessageType | null>(null);

    const modalRef = usePortal('modal-window-container');

    const [isModalWindowOpen, setModalWindowOpen] = useState<boolean>(false);

    const handleOpenModalWindow = () => {
        setModalWindowOpen(true);
    };

    const handleCloseModalWindow = () => {
        setModalWindowOpen(false);
    };

    const handleEmailSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const result = await emailSubmit(formData);
        setMessage(result);
        handleOpenModalWindow();
    };

    return (
        <footer className={styles.footerSection}>
            <section className={styles.subscribeContainer}>
                <div className={styles.subscribeTextContainer}>
                    <p className={styles.subscribeText}>{t('SubscribeText')}</p>
                </div>
                <form
                    onSubmit={handleEmailSubmit}
                    className={styles.subscribeInputContainer}
                >
                    <input
                        name='email'
                        placeholder={t('SubscribeInputPlaceholder')}
                        className={styles.subscribeInput}
                    />
                    <StyledButton submit text={t('SubscribeButtonText')} />
                </form>
            </section>
            <div className={styles.infoContainer}>
                <div>
                    <p>Finstreet 118 2561 Fintown</p>
                    <p>Hello@finsweet.com 020 7993 2905</p>
                </div>
                <div className={styles.infoSocialsContainer}>
                    {socialLinks.map(({ id, title, imgUrl }) => {
                        return (
                            <Image
                                key={id}
                                src={imgUrl}
                                alt={title}
                                {...imageConfig}
                            />
                        );
                    })}
                </div>
            </div>
            {message &&
                modalRef &&
                isModalWindowOpen &&
                createPortal(
                    <ModalWindow
                        {...message}
                        onClose={handleCloseModalWindow}
                    />,
                    modalRef,
                )}
        </footer>
    );
}
