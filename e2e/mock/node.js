import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const posts = require('./posts.json');

const handlers = [
    http.get('https://api.thenewsapi.com/v1/news/all', ({ request }) => {
        console.log(request.url);
        return HttpResponse.json(posts);
    }),
];

const server = setupServer(...handlers);

server.listen({
    onUnhandledRequest: 'warn',
});

console.log('🚀 server start');

const keepAlive = () => {
    process.stdin.resume();
};

keepAlive();

process.on('SIGINT', () => {
    server.close();
    console.log('server stopped');
    process.exit(0);
});

fetch(
    `https://api.thenewsapi.com/v1/news/all?api_token=gdgd&categories=bebe&page=3&language=3&limit=3`,
)
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then(console.log);
