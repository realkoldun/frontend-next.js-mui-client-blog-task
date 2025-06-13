import { handlers } from '@/../e2e/mock/handlers';

export async function register() {
    if (
        process.env.NEXT_RUNTIME === 'nodejs' &&
        process.env.TEST_CHECK_ENV === 'test'
    ) {
        const { setupServer } = await import('msw/node');
        const server = setupServer(...handlers);

        /*server.events.on('request:start', ({ request }) => {
            console.log('MSW intercepted 2:', request.method, request.url);
        });*/
        server.listen();
    }
}
