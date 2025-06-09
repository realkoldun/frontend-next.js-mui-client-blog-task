import { http, HttpResponse } from 'msw';

import posts from './posts.json' assert { type: 'json' };

export const handlers = [
    http.get('https://api.thenewsapi.com/v1/news/al**l', ({ request }) => {
        console.log(request.url);
        return HttpResponse.json(posts);
    }),
];
