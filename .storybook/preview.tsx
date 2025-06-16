import { useEffect, useState } from 'react';

import type { Preview } from '@storybook/nextjs-vite';
import { NextIntlClientProvider } from 'next-intl';

export const decorators = [
    (Story) => {
        const [messages, setMessages] = useState({});

        useEffect(() => {
            fetch('/locales/en/categories.json')
                .then((res) => res.json())
                .then((data) => setMessages(data));
        }, []);

        return (
            <NextIntlClientProvider locale='en' messages={messages}>
                <Story />
            </NextIntlClientProvider>
        );
    },
];

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },

        a11y: {
            test: 'todo',
        },
    },
    decorators,
};

export default preview;
