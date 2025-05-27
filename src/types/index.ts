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

export type CategoriesType = GeneralType & {
    title: Categories;
};

export type PostType = GeneralType & {
    category: Categories;
    author: string;
    date: string;
    text: string;
};
export type SocialLinkType = Omit<GeneralType, 'description'>;

export type LanguageType = Omit<GeneralType, 'description'> & {
    json: Record<string, string>;
    code: LanguageCodes;
    title: Languages;
};
