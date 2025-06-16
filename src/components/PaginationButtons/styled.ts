import { mixins } from '@/styles/mixins';
import { theme } from '@/styles/theme';

export const section = {
    ...mixins.flexCenter,

    flexDirection: {
        xs: theme.display.flexDirection.column,
        md: theme.display.flexDirection.row,
    },
    gap: theme.gap.s,
};

export const pagesContainer = {
    ...mixins.flexCenter,

    gap: { xs: theme.gap.xxs, md: theme.gap.xs },
};

export const button = {
    variant: 'outlined' as const,
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

export const pageInputField = {
    type: 'number' as const,
    size: 'small' as const,
    sx: {
        width: theme.specialSizes.switcherHeight,
        textAlign: theme.display.align.center,
        '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button':
            {
                display: 'none',
                WebkitAppearance: 'none',
            },
        '& input[type=number]': {
            MozAppearance: 'textfield',
        },
    },
};

export const pageSelectionContainer = { ...pagesContainer };
