import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import styles from './footer.module.scss';

import { imageConfig } from '@/components/Footer/config';
import StyledButton from '@/components/StyledButton';
import { socialLinks } from '@/constants/socialLinks';

export default async function Footer() {
    const t = await getTranslations();

    return (
        <footer className={styles.footerSection}>
            <section className={styles.subscribeContainer}>
                <div className={styles.subscribeTextContainer}>
                    <p className={styles.subscribeText}>
                        {t('footerSubscribeText')}
                    </p>
                </div>
                <div className={styles.subscribeInputContainer}>
                    <input
                        placeholder={t('footerSubscribeInputPlaceholder')}
                        className={styles.subscribeInput}
                    />
                    <StyledButton text={t('footerSubscribeButtonText')} />
                </div>
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
        </footer>
    );
}
