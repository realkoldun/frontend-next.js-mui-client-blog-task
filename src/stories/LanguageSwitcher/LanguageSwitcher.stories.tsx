import { Meta, StoryObj } from '@storybook/react';

import LanguageSwitcher from '@/components/LanguageSwitcher';

const meta: Meta<typeof LanguageSwitcher> = {
    title: 'UI/LanguageSwitcher',
    component: LanguageSwitcher,
};

export default meta;

export const Default: StoryObj<typeof LanguageSwitcher> = {
    parameters: {
        nextjs: {
            appDirectory: true,
        },
    },
};
