import { mixins } from '@/styles/mixins';
import { theme } from '@/styles/theme';

export const postHeaderSection = {
    ...mixins.flexCenter,

    component: 'section' as const,
    alignItems: '',
    flexDirection: theme.display.flexDirection.column,
    maxWidth: theme.sizes.xl,
    minHeight: { xs: theme.sizes.xs, md: theme.sizes.s },
    gap: { xs: theme.gap.xs, md: theme.gap.m },
};

export const metaInfoContainer = {
    ...mixins.flexCenter,

    justifyContent: theme.display.align.start,
    width: theme.sizes.full,
    gap: theme.gap.xxs,
};

export const metaInfoTextContainer = {
    ...mixins.flexStart,

    flexDirection: theme.display.flexDirection.column,
};

export const image = {
    style: { borderRadius: theme.border.round },
};

export const authorName = {
    fontFamily: theme.fontFamily.sen,
    color: theme.color.purple,
    fontSize: { xs: theme.fontSize.m, md: theme.fontSize.xl },
};

export const dateText = {
    fontFamily: theme.fontFamily.sen,
    color: theme.color.gray,
};

export const titleText = {
    fontFamily: theme.fontFamily.senBold,
    fontSize: { xs: theme.fontSize.m, md: theme.fontSize.xxxl },
};
