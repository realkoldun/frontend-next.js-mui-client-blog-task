import { Meta, StoryObj } from '@storybook/nextjs-vite';

import StyledButton from '@/components/StyledButton';

const meta: Meta<typeof StyledButton> = {
    title: 'UI/StyledButton',
    component: StyledButton,
    args: {
        text: 'Click me',
    },
};

export default meta;

export const Default: StoryObj<typeof StyledButton> = {};
export const Disabled: StoryObj<typeof StyledButton> = {
    args: {
        disabled: true,
    },
};
export const Wide: StoryObj<typeof StyledButton> = {
    args: {
        isWide: true,
    },
};
export const Submit: StoryObj<typeof StyledButton> = {
    args: {
        submit: true,
    },
};
