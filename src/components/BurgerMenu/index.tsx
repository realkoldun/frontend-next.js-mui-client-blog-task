'use client';

import { memo, PropsWithChildren, useState } from 'react';

import { Box } from '@mui/material';

import * as style from './styled';

import { generateArray } from '@/helpers';
import { useCheckScreenWidth } from '@/hooks';

const MOBILE_SCREEN_SIZE = 500;

function BurgerMenu({ children }: PropsWithChildren) {
    const [isBurgerMenuOpen, setBurgerMenuOpen] = useState<boolean>(false);

    const isWideScreen = useCheckScreenWidth({
        targetWidth: MOBILE_SCREEN_SIZE,
        isWider: true,
    });

    const handleChangeOpenState = (): void => {
        setBurgerMenuOpen((prevState) => !prevState);
    };

    if (typeof isWideScreen === 'undefined') return null;

    if (isWideScreen) return children;

    return (
        <>
            <Box {...style.burgerContainer} onClick={handleChangeOpenState}>
                {generateArray(3).map((_, index) => (
                    <Box key={index} {...style.burgerLine(isBurgerMenuOpen)} />
                ))}
            </Box>
            <Box
                sx={{
                    ...style.menuContainer,
                    transform: isBurgerMenuOpen
                        ? 'translateY(0)'
                        : 'translateY(-100%)',
                    transition: 'transform 0.3s ease-in-out',
                }}
            >
                {children}
            </Box>
        </>
    );
}

export default memo(BurgerMenu);
