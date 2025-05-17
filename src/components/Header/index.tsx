import styles from './header.module.scss';

export default function Header() {
    return (
        <header className={styles.headerSection}>
            <div className={styles.headerContainer}>
                <p className={styles.headerText}>Modsen Blog</p>
            </div>
        </header>
    );
}
