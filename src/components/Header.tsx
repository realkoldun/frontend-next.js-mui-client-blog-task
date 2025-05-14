import styles from '@/styles/header.module.scss';

export default function Header() {
    return (
        <header className={styles['header-section']}>
            <div className={styles['header-container']}>
                <p className={styles['header-container__text']}>Modsen Blog</p>
            </div>
        </header>
    );
}
