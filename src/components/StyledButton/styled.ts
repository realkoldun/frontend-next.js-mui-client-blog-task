import { theme } from '@/styles/theme';

interface ButtonArgs {
    isWide: boolean | undefined;
}

export const button = (arg: ButtonArgs) => ({
    sx: {
        backgroundColor: theme.color.yellow,
        color: theme.color.black,
        width: {
            md: theme.sizes.xs,
            xs: arg.isWide ? theme.sizes.full : theme.sizes.xxs,
        },
        border: `1px ${theme.color.gray} solid`,
        maxWidth: { md: theme.sizes.full, xs: theme.sizes.l },
        height: theme.specialSizes.switcherHeight,
        fontFamily: theme.fontFamily.sen,
        fontSize: { md: theme.fontSize.m, sm: theme.fontSize.s },
        transition: 'background-color 0.3s ease',

        '&:hover': {
            backgroundColor: theme.color.lightYellow,
            cursor: 'pointer' as const,
        },
    },
});
