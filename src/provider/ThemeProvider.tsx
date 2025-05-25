'use client';

import { PropsWithChildren } from 'react';

import { ThemeProvider } from '@mui/material';

import { theme } from '@/styles/theme';

export default function ClientWrapper({ children }: PropsWithChildren) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
