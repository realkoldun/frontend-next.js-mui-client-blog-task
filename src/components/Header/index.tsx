'use client';

import { MouseEvent, useState } from 'react';

import { useRouter } from 'next/navigation';

import styles from './header.module.scss';

import BurgerMenu from '@/components/BurgerMenu';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { PATHS } from '@/constants/paths';
import { useCheckScreenWidth } from '@/hooks/useCheckScreenWidth';

const MOBILE_SCREEN_SIZE = 500;

export default function Header() {
    const router = useRouter();
    const isWideScreen = useCheckScreenWidth({
        targetWidth: MOBILE_SCREEN_SIZE,
        isWider: true,
    });
    const [isBurgerMenuOpen, setBurgerMenuOpen] = useState<boolean>(false);

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
                {typeof isWideScreen !== 'undefined' &&
                    (isWideScreen ? (
                        <LanguageSwitcher />
                    ) : (
                        <BurgerMenu
                            open={isBurgerMenuOpen}
                            setOpenAction={setBurgerMenuOpen}
                        >
                            <LanguageSwitcher />
                        </BurgerMenu>
                    ))}
            </div>
        </header>
    );
}
