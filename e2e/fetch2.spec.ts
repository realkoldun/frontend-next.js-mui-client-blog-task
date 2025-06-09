import { test } from './fixture';

//playwright вообще не видит этот тест

test.describe('fetch test', () => {
    test('Intercept API response', async ({ page }) => {
        await page.goto(`http://localhost:3000/`);
    });
});
