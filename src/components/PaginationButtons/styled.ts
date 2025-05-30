import { theme } from '@/styles/theme';

export const section = {
    display: theme.display.flex,
    alignItems: theme.display.align.center,
    justifyContent: theme.display.align.center,
    gap: theme.gap.xs,
};

export const button = {
    sx: {
        border: 'none',
        fontFamily: theme.fontFamily.sen,
        cursor: 'pointer',
    },
};
