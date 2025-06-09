/*
 * Взял решение с https://stackoverflow.com/questions/70980370/how-do-i-mock-server-side-api-calls-in-a-nextjs-app
 * Используется в конфиге и из-за него не будет работать весь playwright
 */

import { createServer } from 'http';
import next from 'next';
import { parse } from 'url';

import posts from './e2e/mock/posts.json' assert { type: 'json' };

const dev = process.env.NODE_ENV !== 'production';
const baseUrl = process?.env?.API_BASE_URL || 'localhost:3000';

const hostname = String(baseUrl.split(/:(?=\d)/)[0]).replace(/.+:\/\//, '');
const port = Number(baseUrl.split(/:(?=\d)/)[1]);
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

export default async function playwrightSetup() {
    const server = await createServer(async (request, response) => {
        // Mock for a specific endpoint, responds with a fixture.
        if (request.url!.includes('https://api.thenewsapi.com/v1/news/all')) {
            response.write(JSON.stringify(posts));
            response.end();
            return;
        }

        // Regular Next.js behaviour.
        const parsedUrl = parse(request.url!, true);
        await handle(request, response, parsedUrl);
    });

    // Start listening on the configured port.
    server.listen(port);

    // Inject the hostname and port into the applications publicRuntimeConfig.
    process.env.API_BASE_URL = `http://${hostname}:${port}`;
    await app.prepare();
}
