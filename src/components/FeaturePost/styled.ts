import { mixins } from '@/styles/mixins';
import { sectionGeneralStyles } from '@/styles/sectionGeneralStyles';
import { theme } from '@/styles/theme';

export const featurePostSection = {
    ...sectionGeneralStyles.section,

    height: { md: theme.sizes.l, sm: theme.sizes.full },
    padding: { md: theme.padding.m, xs: theme.padding.m },
    marginTop: { xs: theme.padding.xl },
    sx: {
        backgroundColor: theme.color.lightGray,
    },
};

export const featurePostContainer = {
    ...mixins.flexSpaceBetween,

    alignItems: theme.display.align.center,
    flexDirection: {
        sm: theme.display.flexDirection.row,
        xs: theme.display.flexDirection.reverseColumn,
    },
    width: theme.sizes.full,
    maxWidth: theme.specialSizes.maxContainerWidth,
    height: theme.sizes.full,
    gap: theme.gap.xxs,
};

export const image = {
    objectFit: 'cover' as const,
};

export const informationSection = {
    ...mixins.flexStart,

    flexDirection: theme.display.flexDirection.column,
    maxWidth: 900,
    gap: theme.gap.m,
};

export const informationContainer = {
    ...mixins.flexStart,

    flexDirection: theme.display.flexDirection.column,
    gap: theme.gap.xs,
};

export const sectionTitle = {
    fontSize: { md: theme.fontSize.s, sm: theme.fontSize.xs },
    letterSpacing: theme.gap.xxs,
    color: theme.color.darkBlue,
};
export const title = {
    fontFamily: theme.fontFamily.senBold,
    fontSize: { md: theme.fontSize.xl, xs: theme.fontSize.s },
    color: theme.color.darkBlue,
};

export const infoContainer = {
    ...mixins.flexCenter,

    justifyContent: '',
    width: 'fit-content' as const,
    gap: theme.gap.xs,
    height: theme.fontSize.l,
};

export const metaInfo = {
    fontSize: { md: theme.fontSize.s, sm: theme.fontSize.xs },
};

export const authorSpan = {
    component: 'span' as const,
    color: theme.color.purple,
    fontSize: { sm: theme.fontSize.xs },
};

export const descriptionText = {
    color: theme.color.gray,
    fontSize: { sm: theme.fontSize.xs },
};

export const divider = {
    height: theme.sizes.full,
    sx: {
        borderLeft: `1px ${theme.color.black} solid`,
    },
};

export const imageContainer = {
    position: theme.display.position.relative,
    width: theme.sizes.full,
    maxWidth: theme.sizes.l,
    minWidth: { md: theme.sizes.m, sm: theme.sizes.s, xs: theme.sizes.s },
    height: { md: theme.sizes.full, xs: theme.sizes.s },
    maxHeight: theme.sizes.s,
};
