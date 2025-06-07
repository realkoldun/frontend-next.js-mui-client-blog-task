import { theme } from '@/styles/theme';

export const postPageContainer = {
    component: 'main' as const,
    display: theme.display.flex,
    width: theme.sizes.full,
    height: theme.sizes.full,
    flexDirection: theme.display.flexDirection.column,
    alignItems: theme.display.align.center,
    padding: theme.padding.m,
    marginTop: theme.padding.xl,
    gap: { xs: theme.gap.s, md: theme.gap.m },
};

export const imageContainer = {
    width: theme.sizes.full,
    height: { xs: theme.sizes.s, sm: theme.sizes.m, md: theme.sizes.l },
    maxWidth: {
        md: theme.sizes.xxl,
        xs: theme.sizes.full,
    },
    style: {
        position: theme.display.position.relative,
        minHeight: theme.sizes.s,
    },
};

export const mainText = {
    maxWidth: theme.sizes.xl,
    fontSize: { xs: theme.fontSize.s, md: theme.fontSize.s },
};

export const notFoundContainer = {
    display: theme.display.flex,
    flexDirection: theme.display.flexDirection.column,
    alignItems: theme.display.align.center,
    justifyContent: theme.display.align.center,
    minHeight: theme.sizes.xl,
    gap: theme.gap.xs,
    paddingTop: theme.padding.m,
};

export const notFoundCode = {
    fontSize: theme.fontSize.xxxl,
    fontFamily: theme.fontFamily.sen,
};

export const notFoundText = {
    fontFamily: theme.fontFamily.sen,
    fontSize: theme.fontSize.xxl,
};
