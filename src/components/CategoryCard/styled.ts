import { mixins } from '@/styles/mixins';
import { theme } from '@/styles/theme';

export const categoryCardSection = (isSelected: boolean) => ({
    component: 'section' as const,
    width: {
        md: theme.sizes.s,
        sm: theme.specialSizes.maxCardWidth,
        xs: theme.sizes.full,
    },
    height: { md: theme.sizes.xs, sm: theme.sizes.xxs, xs: theme.sizes.xs },
    border: `1px ${theme.color.gray} solid`,
    padding: { md: theme.padding.s, sm: 0, xs: theme.padding.s },

    backgroundColor: isSelected && theme.color.yellow,

    sx: {
        transition: 'background-color 0.2s ease;',

        '&:hover': {
            backgroundColor: theme.color.lightYellow,
            cursor: 'pointer',
        },
    },
});

export const container = {
    ...mixins.flexStart,

    flexDirection: theme.display.flexDirection.column,
    justifyContent: theme.display.align.center,
    width: theme.sizes.full,
    height: theme.sizes.full,
    gap: { md: theme.gap.xxs, xs: 0 },
    padding: { sm: theme.padding.s, xs: 0 },
};

export const title = {
    fontFamily: theme.fontFamily.sen,
    fontSize: {
        md: theme.fontSize.l,
        sm: theme.fontSize.s,
        xs: theme.fontSize.l,
    },
};

export const description = {
    fontSize: {
        md: theme.fontSize.s,
        ms: theme.fontSize.xs,
        xs: theme.fontSize.s,
    },
    fontFamily: theme.fontFamily.sen,
    color: theme.color.darkGray,
};

export const image = {
    position: theme.display.position.relative,
    width: {
        md: theme.fontSize.xxxl,
        sm: theme.fontSize.l,
        xs: theme.specialSizes.modalWindowBottomPosition,
    },
    minHeight: {
        md: theme.fontSize.xxxl,
        sm: theme.fontSize.l,
        xs: theme.specialSizes.modalWindowBottomPosition,
    },
};
