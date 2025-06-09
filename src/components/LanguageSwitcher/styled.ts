import { mixins } from '@/styles/mixins';
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
        ...mixins.flexCenter,

        justifyContent: '',
        gap: theme.gap.xxs,
    },
};

export const menuItem = {
    sx: {
        ...mixins.flexSpaceAround,

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
