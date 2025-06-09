import { mixins } from '@/styles/mixins';
import { sectionGeneralStyles } from '@/styles/sectionGeneralStyles';
import { theme } from '@/styles/theme';

export const categoryListSection = sectionGeneralStyles.section;

export const container = {
    ...mixins.flexStart,

    flexDirection: theme.display.flexDirection.column,
    width: theme.sizes.full,
    maxWidth: theme.specialSizes.maxContainerWidth,
    gap: theme.gap.xs,
};

export const title = sectionGeneralStyles.title;

export const list = {
    ...mixins.flexCenter,

    alignItems: {
        lg: theme.display.align.center,
        md: '',
        xs: theme.display.align.start,
    },
    flexDirection: {
        sm: theme.display.flexDirection.row,
        xs: theme.display.flexDirection.column,
    },
    gap: { md: theme.gap.xs, sm: theme.gap.xxs },
    width: theme.sizes.full,
    flexWrap: 'wrap' as const,
};
