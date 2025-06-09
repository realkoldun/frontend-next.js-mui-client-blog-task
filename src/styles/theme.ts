export const theme = {
    screenSizes: {
        mobile: 550,
    },

    display: {
        flex: 'flex' as const,
        flexDirection: {
            row: 'row' as const,
            column: 'column' as const,
            reverseColumn: 'column-reverse' as const,
        },
        align: {
            center: 'center' as const,
            spaceAround: 'space-around' as const,
            start: 'start' as const,
            spaceBetween: 'space-between' as const,
        },
        position: {
            relative: 'relative' as const,
            fixed: 'fixed' as const,
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
        xxs: 150,
    },
    padding: {
        xl: '80px',
        m: '20px',
        s: '5px',
    },
    specialSizes: {
        switcherHeight: 50,
        modalWindowBottomPosition: 30,
        modalWindowImageSize: 30,
        maxContainerWidth: '1400px',
        maxCardWidth: '250px',
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
    border: {
        round: '50%',
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
        darkGray: '#2E3040',
        black: '#000000',
        white: '#FFFFFF',
        lightYellow: '#FFD099',
        yellow: '#FFD050',
        lightGray: '#f4f4f4',
        darkBlue: '#232536',
    },
    fontFamily: {
        sen: 'SenFont',
        senBold: 'SenFontBold',
    },
};
