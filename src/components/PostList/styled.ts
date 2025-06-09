import { sectionGeneralStyles } from '@/styles/sectionGeneralStyles';
import { theme } from '@/styles/theme';

export const postListSection = sectionGeneralStyles.section;

export const postListContainer = {
    display: theme.display.flex,
    flexDirection: theme.display.flexDirection.column,
    width: theme.sizes.full,
    maxWidth: theme.specialSizes.maxContainerWidth,
    gap: { md: theme.gap.s, xs: theme.gap.xs },
};

export const title = sectionGeneralStyles.title;

export const line = {
    width: theme.sizes.full,
    height: '1px',
    sx: {
        backgroundColor: theme.color.black,
    },
};

export const listContainer = {
    display: theme.display.flex,
    flexDirection: theme.display.flexDirection.column,
    gap: theme.gap.xs,
};
