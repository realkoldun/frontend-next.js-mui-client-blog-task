import { handlers } from '@/../e2e/mock/handlers';

export async function register() {
    if (process.env.NEXT_RUNTIME === 'nodejs') {
        const { setupServer } = await import('msw/node');
        const server = setupServer(...handlers);

        server.listen();
        server.events.on('request:start', ({ request }) => {
            console.log('MSW intercepted 2:', request.method, request.url);
        });
    }
}
