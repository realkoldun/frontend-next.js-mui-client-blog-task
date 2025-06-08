import { theme } from '@/styles/theme';

export const categoryListSection = {
    component: 'section' as const,
    display: theme.display.flex,
    alignItems: theme.display.align.center,
    justifyContent: theme.display.align.center,
    width: theme.sizes.full,
    padding: { md: theme.padding.xl, xs: theme.padding.m },
};

export const container = {
    display: theme.display.flex,
    alignItems: theme.display.align.start,
    flexDirection: theme.display.flexDirection.column,
    width: theme.sizes.full,
    maxWidth: theme.specialSizes.maxContainerWidth,
    gap: theme.gap.xs,
};

export const title = {
    component: 'h2' as const,
    fontFamily: theme.fontFamily.sen,
    fontSize: { md: theme.fontSize.xxxl, xs: theme.fontSize.l },
};

export const list = {
    display: theme.display.flex,
    justifyContent: theme.display.align.center,
    alignItems: {
        lg: theme.display.align.center,
        md: '',
        xs: theme.display.align.start,
    },
    flexDirection: {
        sm: theme.display.flexDirection.row,
        xs: theme.display.flexDirection.column,
    },
    gap: { md: theme.gap.xs, sm: theme.gap.xxs },
    width: theme.sizes.full,
    flexWrap: 'wrap' as const,
};
