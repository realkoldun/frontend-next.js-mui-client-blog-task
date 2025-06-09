import { theme } from '@/styles/theme';

export const mixins = {
    flexSpaceAround: {
        display: theme.display.flex,
        justifyContent: theme.display.align.spaceAround,
    },
    flexCenter: {
        display: theme.display.flex,
        alignItems: theme.display.align.center,
        justifyContent: theme.display.align.center,
    },
    flexStart: {
        display: theme.display.flex,
        alignItems: theme.display.align.start,
    },
    flexSpaceBetween: {
        display: theme.display.flex,
        justifyContent: theme.display.align.spaceBetween,
    },
};
