import { mixins } from '@/styles/mixins';
import { theme } from '@/styles/theme';

export const section = {
    ...mixins.flexCenter,

    component: 'header' as const,
    width: theme.sizes.full,
    height: theme.padding.xl,
    padding: { md: `0 ${theme.padding.xl}`, xs: `0 ${theme.padding.m}` },
    position: theme.display.position.fixed,

    sx: {
        backgroundColor: theme.color.darkBlue,
        top: 0,
        zIndex: 5,
    },
};

export const container = {
    ...mixins.flexSpaceBetween,

    alignItems: theme.display.align.center,
    width: theme.sizes.full,
    maxWidth: theme.specialSizes.maxContainerWidth,
    height: theme.sizes.full,
};

export const text = {
    color: theme.color.white,
    fontSize: theme.fontSize.l,
    cursor: 'pointer' as const,
};
