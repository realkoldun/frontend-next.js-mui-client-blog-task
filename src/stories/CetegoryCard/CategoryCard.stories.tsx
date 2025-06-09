import { Meta, StoryObj } from '@storybook/nextjs-vite';

import CategoryCard from '@/components/CategoryCard';
import { Categories } from '@/types';

const meta: Meta<typeof CategoryCard> = {
    title: 'UI/CategoryCard',
    component: CategoryCard,
    args: {
        title: Categories.GENERAL,
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
export const Technology: StoryObj<typeof CategoryCard> = {
    parameters: {
        nextjs: {
            appDirectory: true,
        },
    },
    args: {
        title: Categories.TECHNOLOGY,
    },
};
