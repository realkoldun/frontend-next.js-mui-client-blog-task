export const theme = {
    display: {
        flex: 'flex' as const,
        flexDirection: {
            row: 'row' as const,
            column: 'column' as const,
        },
        align: {
            center: 'center' as const,
            spaceAround: 'space-around' as const,
            start: 'start' as const,
        },
        position: {
            relative: 'relative' as const,
        },
    },

    sizes: {
        fitContent: 'fit-content' as const,
        full: '100%',
        xxl: 1500,
        xl: 800,
        l: 500,
        m: 400,
        s: 300,
        xs: 200,
    },
    padding: {
        m: '20px',
    },
    gap: {
        l: 10,
        m: 5,
        s: 3,
        xs: 2,
        xxs: 1,
    },
    margin: {
        m: 2,
    },
    fontSize: {
        xs: 14,
        s: 16,
        m: 18,
        l: 24,
        xl: 28,
        xxl: 36,
        xxxl: 48,
    },
    color: {
        purple: '#592EA9',
        gray: '#6D6E76',
    },
    fontFamily: {
        sen: 'SenFont',
        senBold: 'SenFontBold',
    },
};
