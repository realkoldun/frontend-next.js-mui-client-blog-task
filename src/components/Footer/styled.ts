import { mixins } from '@/styles/mixins';
import { theme } from '@/styles/theme';

export const section = {
    ...mixins.flexCenter,

    component: 'footer' as const,
    flexDirection: theme.display.flexDirection.column,
    padding: `${theme.sizes.xs} ${theme.padding.m} ${theme.padding.m}`,
    height: theme.sizes.l,
    paddingTop: { sm: theme.padding.xl },
    gap: theme.gap.m,
    sx: {
        backgroundColor: theme.color.darkBlue,
    },
};

export const subscribeContainer = {
    ...mixins.flexCenter,

    justifyContent: {
        md: theme.display.align.spaceBetween,
        sm: theme.display.align.center,
    },
    flexDirection: {
        md: theme.display.flexDirection.row,
        xs: theme.display.flexDirection.column,
    },
    padding: theme.padding.m,
    maxWidth: {
        md: theme.specialSizes.maxContainerWidth,
        sm: theme.specialSizes.maxContainerWidth,
    },
    height: theme.sizes.full,
    maxHeight: { sm: theme.sizes.full, xs: theme.sizes.s },
    width: theme.sizes.full,
    gap: { sm: theme.gap.s, xs: theme.gap.xxs },
    sx: {
        backgroundColor: theme.color.darkGray,
    },
};

export const subscribeTextContainer = {
    ...mixins.flexSpaceBetween,

    maxWidth: { md: theme.sizes.full, sm: theme.sizes.l },
};

export const subscribeText = {
    fontSize: {
        md: theme.fontSize.xxl,
        xs: theme.fontSize.xl,
    },
    fontFamily: theme.fontFamily.senBold,
    color: theme.color.white,
};

export const inputContainer = {
    ...mixins.flexCenter,

    component: 'form' as const,
    minWidth: { md: theme.sizes.l, sm: 0 },
    flexDirection: {
        md: theme.display.flexDirection.row,
        xs: theme.display.flexDirection.column,
    },
    width: theme.sizes.full,
    height: 'object-fit',
};

export const input = {
    minHeight: theme.specialSizes.switcherHeight,
    fontSize: theme.fontSize.m,
    width: theme.sizes.full,
    maxWidth: theme.sizes.l,
    padding: theme.padding.s,
    color: theme.color.white,
    background: 'none',
    border: `1px ${theme.color.lightGray} solid`,
    outline: 'none',

    ':focus': {
        outline: 'none',
    },
};

export const infoContainer = {
    ...mixins.flexSpaceBetween,

    flexDirection: {
        md: theme.display.flexDirection.row,
        sm: theme.display.flexDirection.column,
    },
    width: theme.sizes.full,
    fontFamily: theme.fontFamily.sen,
    color: theme.color.lightGray,
    maxWidth: theme.specialSizes.maxContainerWidth,
    gap: { sm: theme.gap.xs },
    padding: { sm: theme.padding.m },
};

export const infoSocialsContainer = {
    ...mixins.flexSpaceBetween,

    width: '144px',
};
