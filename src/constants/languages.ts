import { LanguageCodes, Languages, LanguageType } from '@/types';

const DEFAULT_ICON_PATH = '/icons/languages/';

const locales = {
    en: () =>
        import('@/locales/en/common.json').then((module) => module.default),
    ru: () =>
        import('@/locales/ru/common.json').then((module) => module.default),
};

export const languages: LanguageType[] = [
    {
        id: '1',
        title: Languages.ENGLISH,
        code: LanguageCodes.ENGLISH,
        imgUrl: DEFAULT_ICON_PATH + 'enIcon.svg',
        json: await locales.en(),
    },
    {
        id: '2',
        title: Languages.RUSSIAN,
        code: LanguageCodes.RUSSIAN,
        imgUrl: DEFAULT_ICON_PATH + 'ruIcon.svg',
        json: await locales.ru(),
    },
];
