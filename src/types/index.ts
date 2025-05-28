type GeneralType = {
    id: string;
    title: string;
    imgUrl: string;
    description: string;
};

export enum Categories {
    BUSINESS = 'BUSINESS',
    STARTUP = 'STARTUP',
    ECONOMY = 'ECONOMY',
    TECHNOLOGY = 'TECHNOLOGY',
}
export enum Languages {
    RUSSIAN = 'РУССКИЙ',
    ENGLISH = 'ENGLISH',
}

export enum LanguageCodes {
    RUSSIAN = 'ru',
    ENGLISH = 'en',
}

export type CategoriesType = {
    id: string;
    title: Categories;
};

export type PostType = GeneralType & {
    category: Categories;
    author: string;
    date: string;
    text: string;
};
export type SocialLinkType = {
    id: string;
    title: string;
    imgUrl: string;
};

export type LanguageType = {
    id: string;
    title: Languages;
    imgUrl: string;
    code: LanguageCodes;
};
