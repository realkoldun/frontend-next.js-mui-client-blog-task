import Link from 'next/link';

import styles from './header.module.scss';

import BurgerMenu from '@/components/BurgerMenu';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { PATHS } from '@/constants/paths';

export default async function Header() {
    return (
        <header className={styles.headerSection}>
            <div className={styles.headerContainer}>
                <Link href={PATHS.HOME} className={styles.headerText}>
                    Modsen Blog
                </Link>
                <BurgerMenu>
                    <LanguageSwitcher />
                </BurgerMenu>
            </div>
        </header>
    );
}
