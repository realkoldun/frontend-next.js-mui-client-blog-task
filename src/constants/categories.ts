import { Categories, CategoriesType } from '@/types';

const DEFAULT_ICON_PATH = '/icons/categories';

export const categories: CategoriesType[] = [
    {
        id: '1',
        title: Categories.BUSINESS,
        imgUrl: DEFAULT_ICON_PATH + '/businessCategoryIcon.svg',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    {
        id: '2',
        title: Categories.STARTUP,
        imgUrl: DEFAULT_ICON_PATH + '/startupCategoryIcon.svg',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    {
        id: '3',
        title: Categories.ECONOMY,
        imgUrl: DEFAULT_ICON_PATH + '/economyCategoryIcon.svg',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    {
        id: '4',
        title: Categories.TECHNOLOGY,
        imgUrl: DEFAULT_ICON_PATH + '/technologyCategoryIcon.svg',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
];
