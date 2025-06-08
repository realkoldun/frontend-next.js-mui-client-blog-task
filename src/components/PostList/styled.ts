import { theme } from '@/styles/theme';

export const postListSection = {
    component: 'section' as const,
    display: theme.display.flex,
    alignItems: theme.display.align.center,
    justifyContent: theme.display.align.center,
    width: theme.sizes.full,
    padding: { md: theme.padding.xl, xs: theme.padding.m },
};

export const postListContainer = {
    display: theme.display.flex,
    flexDirection: theme.display.flexDirection.column,
    width: theme.sizes.full,
    maxWidth: theme.specialSizes.maxContainerWidth,
    gap: { md: theme.gap.s, xs: theme.gap.xs },
};

export const title = {
    component: 'h2' as const,
    fontFamily: theme.fontFamily.sen,
    fontSize: { md: theme.fontSize.xxxl, xs: theme.fontSize.l },
};

export const line = {
    width: theme.sizes.full,
    height: '1px',
    sx: {
        backgroundColor: theme.color.black,
    },
};

export const listContainer = {
    display: theme.display.flex,
    flexDirection: theme.display.flexDirection.column,
    gap: theme.gap.xs,
};
