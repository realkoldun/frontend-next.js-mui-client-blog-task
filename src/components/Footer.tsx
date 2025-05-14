import StyledButton from '@/components/StyledButton';
import styles from '@/styles/footer.module.scss';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className={styles['footer-section']}>
            <section className={styles['subscribe-container']}>
                <div className={styles['subscribe-container__text-container']}>
                    <p className={styles['subscribe-container__text']}>
                        Subscribe to our news letter to get latest updates and
                        news
                    </p>
                </div>
                <div className={styles['subscribe-container__input-container']}>
                    <input
                        placeholder={'Enter Your Email'}
                        className={styles['subscribe-container__input']}
                    />
                    <StyledButton text={'Subscribe'} />
                </div>
            </section>
            <div className={styles['info-container']}>
                <div>
                    <p>Finstreet 118 2561 Fintown</p>
                    <p>Hello@finsweet.com 020 7993 2905</p>
                </div>
                <div className={styles['info-container__socials-container']}>
                    <Image
                        src={'/linkedIn.png'}
                        alt={'linkedIn'}
                        width={16}
                        height={16}
                    />
                    <Image
                        src={'/linkedIn.png'}
                        alt={'linkedIn'}
                        width={16}
                        height={16}
                    />
                    <Image
                        src={'/linkedIn.png'}
                        alt={'linkedIn'}
                        width={16}
                        height={16}
                    />
                    <Image
                        src={'/linkedIn.png'}
                        alt={'linkedIn'}
                        width={16}
                        height={16}
                    />
                </div>
            </div>
        </footer>
    );
}
