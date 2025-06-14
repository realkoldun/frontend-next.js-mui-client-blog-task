import { http, HttpResponse } from 'msw';

import posts from './posts.json' assert { type: 'json' };

export const handlers = [
    http.get(`${process.env.NEWS_API_URL}/all**`, () => {
        return HttpResponse.json(posts);
    }),
    http.get(`${process.env.NEWS_API_URL}/top**`, () => {
        return HttpResponse.json(posts);
    }),
    http.get(`${process.env.NEWS_API_URL}/uuid/**`, ({ request }) => {
        const requestUuid = request.url.match(/\/uuid\/([^?]+)/);
        const post = posts.data.find(({ uuid }) => uuid === requestUuid![1]);
        return HttpResponse.json(post);
    }),
    http.get(`${process.env.NEWS_API_URL}/similar/**`, ({ request }) => {
        const requestUuid = request.url.match(/\/similar\/([^?]+)/);
        const result = posts.data.filter(
            ({ uuid }) => uuid !== requestUuid![1],
        );
        return HttpResponse.json({ meta: posts.meta, data: result });
    }),
];
