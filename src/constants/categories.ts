import { Categories, CategoriesType } from '@/types';

const DEFAULT_ICON_PATH = '/icons/categories';

export const categories: CategoriesType[] = [
    {
        id: '1',
        title: Categories.BUSINESS,
        imgUrl: DEFAULT_ICON_PATH + '/businessCategoryIcon.png',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    {
        id: '2',
        title: Categories.STARTUP,
        imgUrl: DEFAULT_ICON_PATH + '/startupCategoryIcon.png',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    {
        id: '3',
        title: Categories.ECONOMY,
        imgUrl: DEFAULT_ICON_PATH + '/economyCategoryIcon.png',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    {
        id: '4',
        title: Categories.TECHNOLOGY,
        imgUrl: DEFAULT_ICON_PATH + '/technologyCategoryIcon.png',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
];
