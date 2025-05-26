'use client';

import { MouseEvent } from 'react';

import { useRouter } from 'next/navigation';

import styles from './header.module.scss';

import LanguageSwitcher from '@/components/LanguageSwitcher';
import { PATHS } from '@/constants/paths';

export default function Header() {
    const router = useRouter();

    const handleOnClick = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        router.push(PATHS.HOME);
    };

    return (
        <header className={styles.headerSection}>
            <div className={styles.headerContainer}>
                <p onClick={handleOnClick} className={styles.headerText}>
                    Modsen Blog
                </p>
            </div>
            <LanguageSwitcher />
        </header>
    );
}
