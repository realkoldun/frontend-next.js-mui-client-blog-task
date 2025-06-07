import { test } from '@playwright/test';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

import posts from '../mock/posts.json';

test.describe('fetch test', () => {
    const server = setupServer(
        http.get('https://api.thenewsapi.com/v1/news/all**', ({ params }) => {
            console.log('server bebebebe', params);
            return HttpResponse.json(posts);
        }),
    );

    test.beforeAll(() => {
        server.listen();
    });
    test.afterEach(() => server.resetHandlers());
    test.afterAll(() => server.close());

    test('Intercept API response', async ({ page }) => {
        await page.goto('/');
        await test.setTimeout(1000);
    });
});
