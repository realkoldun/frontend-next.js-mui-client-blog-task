import { expect, test } from '@playwright/test';

import { startMockServer, stopMockServer } from '../../playwright.config';
import posts from '../mock/posts.json';

const LANGUAGES = ['ENGLISH', 'РУССКИЙ'];

test.describe('localization tests', () => {
    test.beforeAll(async () => {
        await startMockServer();
    });
    test.afterAll(async () => {
        await stopMockServer();
    });
    test('language switcher render', async ({ page }) => {
        await page.route('**/news/all/**', async (route) => {
            console.log('Intercepting:', route.request().url());
            await route.fulfill({ json: posts });
        });
        await page.on('console', (msg) => console.log('PAGE LOG:', msg.text()));
        await page.goto('/');
        await page.screenshot({ path: 'screenshots/lang1.png' });
        await expect(page.getByText(LANGUAGES[0])).toBeVisible();
    });

    test('switch language', async ({ page }) => {
        // await getAllPostsMock(page);
        await page.goto('/');
        await page.screenshot({ path: 'screenshots/lang2.png' });
        await page.getByText(LANGUAGES[0]).click();
        await expect(page.getByText(LANGUAGES[1])).toBeVisible();
        await page.getByText(LANGUAGES[1]).click();
        await expect(page.getByText(LANGUAGES[1])).toBeVisible();
        await expect(page.getByText(LANGUAGES[0])).not.toBeVisible();
    });
});
