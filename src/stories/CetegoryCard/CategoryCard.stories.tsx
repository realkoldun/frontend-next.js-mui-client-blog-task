import { Meta, StoryObj } from '@storybook/nextjs-vite';

import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/constants/categories';
import { Categories } from '@/types';

const meta: Meta<typeof CategoryCard> = {
    title: 'UI/CategoryCard',
    component: CategoryCard,
    args: {
        title: Categories.GENERAL,
    },
    argTypes: {
        title: {
            control: {
                type: 'radio',
            },
            options: categories.map((category) => category.title),
        },
    },
};

export default meta;

export const Default: StoryObj<typeof CategoryCard> = {
    parameters: {
        nextjs: {
            appDirectory: true,
        },
    },
};
