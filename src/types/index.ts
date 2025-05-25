type GeneralType = {
    id: string;
    title: string;
    imgUrl: string;
    description: string;
};

export enum Categories {
    BUSINESS = 'Business',
    STARTUP = 'Startup',
    ECONOMY = 'Economy',
    TECHNOLOGY = 'Technology',
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
