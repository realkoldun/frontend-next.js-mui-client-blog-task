import { expect, test } from '@playwright/test';
import { Page } from 'playwright';

import localizationEn from '@/../public/locales/en/common.json' assert { type: 'json' };
import localizationRu from '@/../public/locales/ru/common.json' assert { type: 'json' };
import { register } from '@/instrumentation';

const LANGUAGES = ['ENGLISH', 'РУССКИЙ'];

test.describe('localization tests', () => {
    const changeLanguage = async (page: Page) => {
        await page.getByText(LANGUAGES[0]).click();
        await page.getByText(LANGUAGES[1]).click();
    };
    test.beforeAll(async () => {
        await register();
    });

    test.beforeEach(async ({ page }) => {
        await page.goto(`/`);
    });

    test('language switcher render', async ({ page }) => {
        await expect(page.getByText(LANGUAGES[0])).toBeVisible();
    });

    test('switch language', async ({ page }) => {
        await page.getByText(LANGUAGES[0]).click();
        await expect(page.getByText(LANGUAGES[1])).toBeVisible();
        await page.getByText(LANGUAGES[1]).click();
        await expect(page.getByText(LANGUAGES[1]).first()).toBeVisible();
        await expect(page.getByText(LANGUAGES[0])).not.toBeVisible();
    });

    test('switch language on feature post', async ({ page }) => {
        await changeLanguage(page);

        await expect(
            page.getByText(localizationRu.HomePage.FeaturePost.SectionTitle),
        ).toBeVisible();
        await expect(
            page.getByText(localizationEn.HomePage.FeaturePost.SectionTitle),
        ).not.toBeVisible();
    });

    test('switch language on all posts', async ({ page }) => {
        await changeLanguage(page);

        await expect(
            page.getByText(localizationRu.HomePage.PostList.SectionTitle),
        ).toBeVisible();
        await expect(
            page.getByText(localizationEn.HomePage.PostList.SectionTitle),
        ).not.toBeVisible();
    });

    test('switch language on all categories', async ({ page }) => {
        await changeLanguage(page);

        await expect(
            page.getByText(localizationRu.HomePage.CategoryList.SectionTitle),
        ).toBeVisible();
        await expect(
            page.getByText(localizationEn.HomePage.CategoryList.SectionTitle),
        ).not.toBeVisible();
    });
});
