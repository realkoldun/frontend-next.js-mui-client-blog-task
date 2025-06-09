import { Meta, StoryObj } from '@storybook/nextjs-vite';

import PaginationButtons from '@/components/PaginationButtons';

const meta: Meta<typeof PaginationButtons> = {
    title: 'UI/PaginationButtons',
    component: PaginationButtons,
    args: {
        totalPages: 10,
    },
};

export default meta;

export const Default: StoryObj<typeof PaginationButtons> = {
    parameters: {
        nextjs: {
            appDirectory: true,
        },
    },
};
export const FewPages: StoryObj<typeof PaginationButtons> = {
    parameters: {
        nextjs: {
            appDirectory: true,
        },
    },
    args: {
        totalPages: 3,
    },
};
export const ManyPages: StoryObj<typeof PaginationButtons> = {
    parameters: {
        nextjs: {
            appDirectory: true,
        },
    },
    args: {
        totalPages: 50,
    },
};
