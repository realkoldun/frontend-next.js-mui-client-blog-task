import { createServer } from 'http';
import next from 'next';
import { parse } from 'url';

import posts from './e2e/mock/posts.json' assert { type: 'json' };

const dev = process.env.NODE_ENV !== 'production';

const hostname = 'localhost';
const port = 3000;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

export default async function playwrightSetup() {
    const server = createServer((request, response) => {
        if (request.url!.includes('https://api.thenewsapi.com/v1/news/all')) {
            response.write(JSON.stringify(posts));
            response.end();
            return;
        }

        const parsedUrl = parse(request.url!, true);
        handle(request, response, parsedUrl).then(() => app.prepare());
    });
    server.listen(port, async () => {
        console.error('run');
    });
}
