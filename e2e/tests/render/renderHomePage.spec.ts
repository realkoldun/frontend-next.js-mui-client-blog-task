import { test } from '@playwright/test';

import localizationEn from '@/../public/locales/en/common.json' assert { type: 'json' };
import { register } from '@/../src/instrumentation';
import posts from '@/mock/posts.json' assert { type: 'json' };

test.describe('render test', () => {
    test.beforeAll(async () => {
        await register();
    });

    test.beforeEach(async ({ page }) => {
        await page.goto(`/`);
    });

    test('Render page', async ({ page }) => {
        await page.getByText('Modsen blog');
    });

    test('Render feature post', async ({ page }) => {
        await page.getByText(localizationEn.HomePage.FeaturePost.SectionTitle);
        await page.getByText(posts.data[0].title);
    });

    test('Render posts list', async ({ page }) => {
        await page.getByText(localizationEn.HomePage.PostList.SectionTitle);
        for (let i = 0; i < posts.data.length; i++) {
            await page.getByText(posts.data[i].title);
        }
    });
});
