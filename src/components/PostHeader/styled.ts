import { theme } from '@/styles/theme';

export const postHeaderSection = {
    component: 'section' as const,
    display: theme.display.flex,
    justifyContent: theme.display.align.center,
    flexDirection: theme.display.flexDirection.column,
    maxWidth: theme.sizes.xl,
    minHeight: { xs: theme.sizes.xs, md: theme.sizes.s },
    gap: { xs: theme.gap.xs, md: theme.gap.m },
};

export const metaInfoContainer = {
    display: theme.display.flex,
    justifyContent: theme.display.align.start,
    width: theme.sizes.full,
    gap: theme.gap.xxs,
    alignItems: theme.display.align.center,
};

export const metaInfoTextContainer = {
    display: theme.display.flex,
    flexDirection: theme.display.flexDirection.column,
    alignItems: theme.display.align.start,
};

export const image = {
    style: { borderRadius: '50%' },
};

export const authorName = {
    fontFamily: theme.fontFamily.sen,
    color: theme.color.purple,
    fontSize: { xs: theme.fontSize.l, md: theme.fontSize.xl },
};

export const dateText = {
    fontFamily: theme.fontFamily.sen,
    color: theme.color.gray,
};

export const titleText = {
    fontFamily: theme.fontFamily.senBold,
    fontSize: { xs: theme.fontSize.m, md: theme.fontSize.xxxl },
};
