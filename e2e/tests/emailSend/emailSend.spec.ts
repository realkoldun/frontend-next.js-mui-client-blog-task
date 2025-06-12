import { test } from '@playwright/test';

import translation from '@/../public/locales/en/common.json' assert { type: 'json' };

test.describe('email send tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        translation;
    });

    test('success send', async ({ page }) => {
        await page.route(
            'https://api.emailjs.com/api/v1.0/email/send',
            async (route) => {
                await route.fulfill({
                    status: 200,
                    contentType: 'application/json',
                    body: JSON.stringify({ success: true }),
                });
            },
        );
        const emailInput = await page.getByPlaceholder('Enter your email');
        await emailInput.fill('anton.kitaev.97@gmail.com');

        await page.getByText(translation.ModalWindow.SuccessMessage);
        await page.getByText(translation.ModalWindow.SuccessDescription);
    });

    test('invalid email', async ({ page }) => {
        const emailInput = await page.getByPlaceholder('Enter your email');
        await emailInput.fill('invalid email');

        await page.getByText(translation.ModalWindow.InvalidEmailMessage);
        await page.getByText(translation.ModalWindow.InvalidEmailDescription);
    });

    test('error send', async ({ page }) => {
        await page.route(
            'https://api.emailjs.com/api/v1.0/email/send',
            async (route) => {
                await route.fulfill({
                    status: 401,
                    contentType: 'application/json',
                    body: JSON.stringify({ success: false }),
                });
            },
        );
        const emailInput = await page.getByPlaceholder('Enter your email');
        await emailInput.fill('anton.kitaev.97@gmail.com');

        await page.getByText(translation.ModalWindow.ServerErrorMessage);
        await page.getByText(translation.ModalWindow.ServerErrorDescription);
    });
});
