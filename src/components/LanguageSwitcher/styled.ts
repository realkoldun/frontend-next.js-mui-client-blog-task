import { theme } from '@/styles/theme';

export const select = {
    sx: {
        width: theme.sizes.xxs,
        height: theme.specialSizes.switcherHeight,
        border: 'none',
    },
};

export const selectedContainer = {
    sx: {
        display: theme.display.flex,
        alignItems: theme.display.align.center,
        gap: theme.gap.xxs,
    },
};

export const menuItem = {
    sx: {
        display: theme.display.flex,
        justifyContent: theme.display.align.spaceAround,
        width: theme.sizes.xxs,
    },
};

export const selectedText = {
    fontFamily: theme.fontFamily.sen,
    fontSize: theme.fontSize.xs,
    color: theme.color.white,
};

export const text = {
    fontFamily: theme.fontFamily.sen,
    fontSize: theme.fontSize.xs,
    color: theme.color.black,
};
