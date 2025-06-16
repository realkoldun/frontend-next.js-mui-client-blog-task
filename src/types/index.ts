export enum Categories {
    BUSINESS = 'BUSINESS',
    GENERAL = 'GENERAL',
    POLITICS = 'POLITICS',
    TECHNOLOGY = 'TECH',
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

export type PostType = Record<
    | 'uuid'
    | 'category'
    | 'title'
    | 'source'
    | 'keywords'
    | 'url'
    | 'published_at'
    | 'description'
    | 'snippet'
    | 'image_url',
    string
>;
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

export type ModalWindowMessageType = {
    message: string;
    description: string;
    error?: boolean;
};

export type SearchParams = Promise<{
    category?: string;
    page?: string;
}>;

export type ResponseMeta = {
    found: string;
    returned: string;
    limit: string;
    page: string;
};

export type ResponseData = Omit<PostType, 'category'> & {
    categories?: string[];
};

export type Response = {
    meta?: ResponseMeta;
    data: ResponseData[];
};
