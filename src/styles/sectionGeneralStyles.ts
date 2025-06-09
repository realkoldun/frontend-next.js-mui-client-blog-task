import { mixins } from '@/styles/mixins';
import { theme } from '@/styles/theme';

export const sectionGeneralStyles = {
    section: {
        ...mixins.flexCenter,

        component: 'section' as const,
        width: theme.sizes.full,
        padding: { md: theme.padding.xl, xs: theme.padding.m },
    },
    title: {
        component: 'h2' as const,
        fontFamily: theme.fontFamily.sen,
        fontSize: { md: theme.fontSize.xxxl, xs: theme.fontSize.l },
    },
};
