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
        color: theme.color.black,
        fontSize: theme.fontSize.s,
        '&:hover': {
            backgroundColor: theme.color.lightYellow,
        },
        '&.MuiButton-contained': {
            backgroundColor: theme.color.yellow,
            '&:hover': {
                backgroundColor: theme.color.lightYellow,
            },
        },
    },
};
