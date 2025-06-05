import { theme } from '@/styles/theme';

export const section = {
    display: theme.display.flex,
    alignItems: theme.display.align.center,
    justifyContent: theme.display.align.center,
    gap: { xs: theme.gap.xxs, md: theme.gap.xs },
};

export const button = {
    sx: {
        border: `none`,
        fontFamily: theme.fontFamily.sen,
        cursor: 'pointer',
        color: theme.color.black,
        fontSize: theme.fontSize.s,
        '&:hover': {
            backgroundColor: theme.color.lightYellow,
        },
        '&:disabled': {
            border: `none`,
        },
        '&.MuiButton-contained': {
            backgroundColor: theme.color.yellow,
            '&:hover': {
                backgroundColor: theme.color.lightYellow,
            },
        },
        '@media (max-width: 700px)': {
            fontSize: theme.fontSize.xs,
            paddingLeft: 0,
            paddingRight: 0,
            minWidth: theme.specialSizes.switcherHeight,
        },
    },
};

export const smallButton = {
    sx: {
        ...button.sx,
        [`@media (max-width: ${theme.screenSizes.mobile}px)`]: {
            fontSize: theme.fontSize.xs,
            paddingLeft: 0,
            paddingRight: 0,
            minWidth: theme.specialSizes.modalWindowImageSize,
        },
    },
};
