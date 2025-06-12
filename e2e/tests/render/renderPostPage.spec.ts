import { expect, test } from '@playwright/test';

import posts from '../../mock/posts.json' assert { type: 'json' };

import { formatDate } from '@/helpers';
import { register } from '@/instrumentation';

test.describe('render test', () => {
    const mainPost = posts.data[0];
    test.beforeAll(async () => {
        await register();
    });

    test.beforeEach(async ({ page }) => {
        await page.goto(`/post/${mainPost.uuid}`);
    });

    test('Render post header', async ({ page }) => {
        await expect(page.getByText(mainPost.title).first()).toBeVisible();
        await expect(
            page.getByText(
                `Posted on ${formatDate(posts.data[0].published_at, 'en')}`,
            ),
        ).toBeVisible();
    });

    test('Render suggestion posts', async ({ page }) => {
        const suggestionPosts = posts.data.filter(
            ({ uuid }) => uuid !== mainPost.uuid,
        );
        for (const post of suggestionPosts) {
            await expect(page.getByText(post.title)).toBeVisible();
        }
    });
});
