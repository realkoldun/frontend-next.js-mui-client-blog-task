import { test } from '@playwright/test';

test.describe('fetch test', () => {
    test('Intercept API response', async ({ page }) => {
        await page.goto(`http://localhost:3000/`);
    });
});
