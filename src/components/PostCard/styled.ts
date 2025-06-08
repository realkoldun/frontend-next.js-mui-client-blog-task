import { theme } from '@/styles/theme';

export const postSection = {
    component: 'section' as const,
    display: theme.display.flex,
    alignItems: theme.display.align.center,
    justifyContent: {
        md: theme.display.align.start,
        sm: theme.display.align.center,
    },
    flexDirection: {
        md: theme.display.flexDirection.row,
        xs: theme.display.flexDirection.column,
    },
    width: theme.sizes.full,
    height: { md: theme.sizes.s, sm: theme.sizes.l },
    gap: { md: theme.gap.xs, sm: theme.gap.xxs },

    sx: {
        transition: 'background-color 0.3s ease',
        '&:hover': {
            backgroundColor: theme.color.lightGray,
            cursor: 'pointer',
        },
    },
};

export const smallPostSection = {
    ...postSection,
    height: theme.sizes.m,
    flexDirection: theme.display.flexDirection.column,
};

export const metaInfoContainer = {
    display: theme.display.flex,
    alignItems: theme.display.align.center,
    justifyContent: theme.display.align.center,
    gap: theme.gap.xxs,
    height: theme.padding.m,
};

export const informationContainer = {
    display: theme.display.flex,
    alignItems: theme.display.align.start,
    flexDirection: theme.display.flexDirection.column,
    gap: theme.gap.xxs,
};

export const category = {
    fontSize: theme.fontSize.s,
    fontFamily: theme.fontFamily.sen,
    color: theme.color.purple,
};

export const title = {
    fontSize: {
        md: theme.fontSize.xxl,
        sm: theme.fontSize.l,
        xs: theme.fontSize.s,
    },
    fontFamily: theme.fontFamily.senBold,
};

export const smallTitle = {
    fontSize: theme.fontSize.s,
};

export const description = {
    fontSize: { sm: theme.fontSize.s, xs: theme.fontSize.xs },
    fontFamily: theme.fontFamily.sen,
    color: theme.color.darkGray,
};

export const smallDescription = {
    ...description,
    fontSize: theme.fontSize.xs,
};

export const imageContainer = {
    position: theme.display.position.relative,
    maxWidth: theme.sizes.m,
    width: theme.sizes.full,
    minWidth: { sm: theme.sizes.m, xs: theme.sizes.xs },
    height: { md: theme.sizes.full, sm: theme.sizes.s, xs: theme.sizes.xs },
    sx: {
        aspectRatio: '1 / 1',
    },
};

export const smallImageContainer = {
    position: theme.display.position.relative,
    width: theme.sizes.full,
    maxWidth: theme.sizes.s,
    minWidth: { xs: theme.sizes.xs },
    height: theme.sizes.xs,
};

export const divider = {
    height: theme.sizes.full,
    sx: {
        borderLeft: `1px ${theme.color.black} solid`,
    },
};

export const metaInformation = {
    fontSize: theme.fontSize.xs,
};

export const authorSpan = {
    component: 'span' as const,
    color: theme.color.purple,
    fontSize: { sm: theme.fontSize.xs },
};

export const image = {
    style: { objectFit: 'cover' as const },
};
