type GeneralType = {
    id: string;
    title: string;
    imgUrl: string;
    description: string;
};

export type CategoriesType = GeneralType;
export type PostType = GeneralType & {
    type: string;
};
export type SocialLinkType = Omit<GeneralType, 'description'>;
