import { test } from '@playwright/test';

test.describe('fetch test', () => {
    /*test.beforeAll(() => {
        server.listen();
    });
    test.afterEach(() => server.resetHandlers());
    test.afterAll(() => server.close());*/

    test('Intercept API response', async ({ page }) => {
        await page.goto('/');
        await test.setTimeout(1000);
    });
});
