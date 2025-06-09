import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
    globalSetup: './playwright.setup.ts',
    //нужно удалить при использовании другого способа
    testDir: './e2e',
});
