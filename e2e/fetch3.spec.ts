/*
 * используя чистый msw/node сервер
 */

import { test } from '@playwright/test';
import { setupServer } from 'msw/node';
import { afterEach, beforeEach } from 'node:test';

import { handlers } from './mock/handlers';

test.describe('fetch test', () => {
    const server = setupServer(...handlers);
    beforeEach(() => {
        server.listen();
    });
    afterEach(() => {
        server.close();
    });
    test('Intercept API response', async ({ page }) => {
        await page.goto(`http://localhost:3000/`);
    });
});
