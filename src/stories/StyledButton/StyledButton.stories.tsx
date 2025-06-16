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

export const Default: StoryObj<typeof StyledButton> = {
    args: {
        text: 'Text',
        submit: false,
        disabled: false,
        isWide: false,
    },
};
