import { http, HttpResponse } from 'msw';

import posts from './posts.json' assert { type: 'json' };

export const handlers = [
    http.get('https://api.thenewsapi.com/v1/news/all**', () => {
        return HttpResponse.json(posts);
    }),
    http.get('https://api.thenewsapi.com/v1/news/top**', () => {
        return HttpResponse.json(posts);
    }),
    http.get('https://api.thenewsapi.com/v1/news/uuid/**', ({ request }) => {
        const requestUuid = request.url.match(/\/uuid\/([^?]+)/);
        const post = posts.data.find(({ uuid }) => uuid === requestUuid![1]);
        return HttpResponse.json(post);
    }),
    http.get('https://api.thenewsapi.com/v1/news/similar/**', ({ request }) => {
        const requestUuid = request.url.match(/\/uuid\/([^?]+)/);
        const result = posts.data.filter(
            ({ uuid }) => uuid !== requestUuid![1],
        );
        return HttpResponse.json(result);
    }),
];
