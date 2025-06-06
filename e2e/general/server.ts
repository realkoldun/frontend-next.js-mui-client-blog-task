import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

import posts from '../mock/posts.json';

export const server = setupServer(
    http.get('https://api.thenewsapi.com/v1/news/all/**', () => {
        console.log(process.env.NEWS_API_URL);
        return HttpResponse.json(posts);
    }),
);
