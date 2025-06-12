import { test } from '@playwright/test';

import posts from '../../mock/posts.json' assert { type: 'json' };

import { PATHS } from '@/constants/paths';
import { register } from '@/instrumentation';

test.describe('render test', () => {
    const mainPost = posts.data[1];
    test.beforeAll(async () => {
        await register();
    });

    test('Go to post', async ({ page }) => {
        await page.goto(`/`);
        await page.locator(`a[href*="${PATHS.POST + mainPost.uuid}"]`).click();

        await page.waitForURL(`${PATHS.POST}${mainPost.uuid}`);
    });

    test('Go to home page', async ({ page }) => {
        await page.goto(`${PATHS.POST}/${mainPost.uuid}`);
        await page.getByText('Modsen blog').click();

        await page.waitForURL(`/`);
    });

    test('Go to selected category', async ({ page }) => {
        await page.goto(`${PATHS.POST}/${mainPost.uuid}`);
        await page.getByText(`${mainPost.categories[0]}`).first().click();

        await page.waitForURL(`?category=${mainPost.categories[0]}`);
    });
});
