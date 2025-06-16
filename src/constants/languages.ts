import { LanguageCodes, Languages, LanguageType } from '@/types';

const DEFAULT_ICON_PATH = '/icons/languages/';

export const languages: LanguageType[] = [
    {
        id: '1',
        title: Languages.ENGLISH,
        code: LanguageCodes.ENGLISH,
        imgUrl: DEFAULT_ICON_PATH + 'enIcon.svg',
    },
    {
        id: '2',
        title: Languages.RUSSIAN,
        code: LanguageCodes.RUSSIAN,
        imgUrl: DEFAULT_ICON_PATH + 'ruIcon.svg',
    },
];
