import { mixins } from '@/styles/mixins';
import { theme } from '@/styles/theme';

export const modalWindowContainer = {
    ...mixins.flexSpaceAround,

    alignItems: theme.display.align.center,
    position: theme.display.position.fixed,
    zIndex: theme.sizes.s,
    right: 0,
    bottom: theme.specialSizes.modalWindowBottomPosition,
    width: { md: theme.sizes.m, xs: theme.sizes.s },
    height: theme.padding.xl,
    padding: theme.padding.m,
    gap: theme.gap.s,
    sx: {
        backgroundColor: theme.color.white,
        border: 'black 1px solid',
        borderRadius: theme.gap.xs,
    },
};

export const imageConfig = {
    alt: 'modal icon',
    width: theme.specialSizes.modalWindowImageSize,
    height: theme.specialSizes.modalWindowImageSize,
};

export const messageStyle = {
    fontSize: theme.fontSize.m,
    fontFamily: theme.fontFamily.sen,
};

export const descriptionStyle = {
    fontSize: theme.fontSize.xs,
    fontFamily: theme.fontFamily.sen,
};
