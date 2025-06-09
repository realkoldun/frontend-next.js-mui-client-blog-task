import { Box, Typography } from '@mui/material';
import Link from 'next/link';

import * as style from './styled';

import BurgerMenu from '@/components/BurgerMenu';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { PATHS } from '@/constants/paths';

export default async function Header() {
    return (
        <Box {...style.section}>
            <Box {...style.container}>
                <Link href={PATHS.HOME}>
                    <Typography {...style.text}>Modsen Blog</Typography>
                </Link>
                <BurgerMenu>
                    <LanguageSwitcher />
                </BurgerMenu>
            </Box>
        </Box>
    );
}
