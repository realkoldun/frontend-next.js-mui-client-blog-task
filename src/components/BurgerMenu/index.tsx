'use client';

import { Dispatch, PropsWithChildren, SetStateAction } from 'react';

import { Box } from '@mui/material';

import * as style from './styled';

interface BurgerMenuProps extends PropsWithChildren {
    open: boolean;
    setOpenAction: Dispatch<SetStateAction<boolean>>;
}

export default function BurgerMenu({
    open,
    setOpenAction,
    children,
}: BurgerMenuProps) {
    const handleChangeOpenState = (): void => {
        setOpenAction((prevState) => !prevState);
    };

    return (
        <>
            <Box {...style.burgerContainer} onClick={handleChangeOpenState}>
                <Box {...style.burgerLine(open)} />
                <Box {...style.burgerLine(open)} />
                <Box {...style.burgerLine(open)} />
            </Box>
            <Box
                sx={{
                    ...style.menuContainer,
                    transform: open ? 'translateY(0)' : 'translateY(-100%)',
                    transition: 'transform 0.3s ease-in-out',
                }}
            >
                {children}
            </Box>
        </>
    );
}
