import { theme } from '@/styles/theme';

export const section = {
    display: theme.display.flex,
    alignItems: theme.display.align.center,
    width: { xs: theme.sizes.xxs, md: theme.sizes.xs },
    justifyContent: theme.display.align.spaceBetween,
};

export const imageContainer = {
    position: theme.display.position.relative,
    width: { xs: theme.fontSize.l, md: theme.fontSize.xxxl },
    height: { xs: theme.fontSize.l, md: theme.fontSize.xxxl },
};

export const imageStyle = {
    fill: true,
    style: {
        borderRadius: '50%',
    },
};

export const title = {
    fontFamily: { xs: theme.fontFamily.sen, md: theme.fontFamily.senBold },
    fontSize: { xs: theme.fontSize.xs, md: theme.fontSize.l },
};
