/*
 * Решение с https://stackoverflow.com/questions/70980370/how-do-i-mock-server-side-api-calls-in-a-nextjs-app
 */

import { test as base, Page } from '@playwright/test';
import { createServer, Server } from 'http';
import { setupServer, SetupServerApi } from 'msw/node';
import { AddressInfo } from 'net';
import next from 'next';
import path from 'path';
import { parse } from 'url';

//import * as json from '../.next/prerender-manifest.json' assert { type: 'json' };
//если будет ошибка, то нужно убрать импорт, собрать проект и тогда манифест появится

export const test = base.extend<{
    dynamicPage: Page;
    port: string;
    requestInterceptor: SetupServerApi;
}>({
    dynamicPage: async ({ context }, use) => {
        await context.addCookies([
            {
                name: '__prerender_bypass',
                value: '',
                //json.preview.previewModeId,
                domain: 'localhost',
                path: '/',
            },
        ]);

        const dynamicPage = await context.newPage();
        // eslint-disable-next-line react-hooks/rules-of-hooks
        await use(dynamicPage);
    },
    port: [
        // eslint-disable-next-line no-empty-pattern
        async ({}, use) => {
            const app = next({
                dev: false,
                dir: path.resolve(__dirname, '..'),
            });
            await app.prepare();

            const handle = app.getRequestHandler();

            const server: Server = await new Promise(() => {
                const server = createServer((req, res) => {
                    const parsedUrl = parse(req.url!, true);
                    handle(req, res, parsedUrl);
                });

                server.listen();
            });
            const port = String((server.address() as AddressInfo).port);
            await use(port);
        },
        {
            scope: 'test',
            //должен быть worker, но это вызывает ошибку
            auto: true,
        },
    ],
    requestInterceptor: [
        // eslint-disable-next-line no-empty-pattern
        async ({}, use) => {
            await use(
                (() => {
                    const requestInterceptor = setupServer();

                    requestInterceptor.listen({
                        onUnhandledRequest: 'bypass',
                    });

                    return requestInterceptor;
                })(),
            );
        },
        {
            scope: 'test',
            //должен быть worker, но это вызывает ошибку
        },
    ],
});
