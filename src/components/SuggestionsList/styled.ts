import { theme } from '@/styles/theme';

export const suggestionListContainer = {
    component: 'section' as const,
    display: theme.display.flex,
    flexDirection: theme.display.flexDirection.column,
    width: theme.sizes.full,
    alignItems: {
        md: theme.display.align.start,
        xs: theme.display.align.center,
    },
    maxWidth: theme.sizes.xxl,
    minHeight: theme.sizes.l,
    gap: theme.gap.xs,
};

export const title = {
    width: { ms: '', xs: theme.sizes.full },
    fontFamily: theme.fontFamily.senBold,
    fontSize: { xs: theme.fontSize.l, md: theme.fontSize.xxl },
};

export const suggestionsContainer = {
    display: theme.display.flex,
    flexDirection: {
        md: theme.display.flexDirection.row,
        xs: theme.display.flexDirection.column,
    },
    'overflow-y': 'scroll' as const,
    alignItems: { md: '', xs: theme.display.align.center },
    justifyContent: theme.display.align.spaceAround,
    width: theme.sizes.fitContent,
    maxWidth: theme.sizes.full,
    gap: { md: theme.gap.l, xs: theme.gap.m },
};
