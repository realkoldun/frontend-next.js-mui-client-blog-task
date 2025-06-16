import { mixins } from '@/styles/mixins';
import { theme } from '@/styles/theme';

export const burgerContainer = {
    ...mixins.flexSpaceAround,

    component: 'section' as const,
    flexDirection: theme.display.flexDirection.column,
    background: 'transparent' as const,
    border: 'none' as const,
    cursor: 'pointer' as const,
    minHeight: '33px',
    minWidth: '33px',
    'z-index': 2,
    position: 'relative' as const,
};

export const burgerLine = (isOpen: boolean) => ({
    width: '33px',
    height: '2px',
    backgroundColor: theme.color.white,
    borderRadius: '10px',
    zIndex: 2,
    position: 'relative' as const,
    opacity: isOpen ? 0 : 1,
    pointerEvents: isOpen ? 'none' : 'auto',
});

export const menuContainer = {
    ...mixins.flexCenter,

    flexDirection: theme.display.flexDirection.column,
    justifyContent: 'normal' as const,
    fontSize: theme.fontSize.l,
    paddingTop: theme.padding.m,
    position: 'fixed' as const,
    backgroundColor: theme.color.darkGray,
    top: 0,
    left: 0,
    width: theme.sizes.full,
    height: theme.sizes.full,
    'z-index': 1,
};
