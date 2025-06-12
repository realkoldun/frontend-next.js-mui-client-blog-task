import { handlers } from '@/../e2e/mock/handlers';

export async function register() {
    if (process.env.NEXT_RUNTIME === 'nodejs') {
        const { setupServer } = await import('msw/node');
        const server = setupServer(...handlers);

        server.listen();
    }
}
