import { test } from '@playwright/test';

import translation from '@/../public/locales/en/common.json' assert { type: 'json' };
import { register } from '@/instrumentation';

test.describe('email send tests', () => {
    test.beforeAll(async () => {
        await register();
    });

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('success send', async ({ page }) => {
        await page.route(process.env.EMAIL_API_URL!, async (route) => {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify({ success: true }),
            });
        });
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
        await page.route(process.env.EMAIL_API_URL!, async (route) => {
            await route.fulfill({
                status: 401,
                contentType: 'application/json',
                body: JSON.stringify({ success: false }),
            });
        });
        const emailInput = await page.getByPlaceholder('Enter your email');
        await emailInput.fill('anton.kitaev.97@gmail.com');

        await page.getByText(translation.ModalWindow.ServerErrorMessage);
        await page.getByText(translation.ModalWindow.ServerErrorDescription);
    });
});
