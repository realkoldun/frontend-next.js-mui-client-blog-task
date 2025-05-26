import { theme } from '@/styles/theme';

export const select = {
    sx: {
        width: theme.sizes.xxs,
        height: 50,
    },
};

export const selectedContainer = {
    sx: {
        display: theme.display.flex,
        alignItems: theme.display.align.center,
        gap: '8px',
    },
};

export const menuItem = {
    sx: {
        display: theme.display.flex,
        justifyContent: theme.display.align.spaceAround,
        width: '150px',
    },
};

export const selectedText = {
    fontFamily: theme.fontFamily.sen,
    fontSize: 14,
    color: theme.color.white,
};

export const text = {
    fontFamily: theme.fontFamily.sen,
    fontSize: 14,
    color: theme.color.black,
};
