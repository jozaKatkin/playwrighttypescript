import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

    use: {
      baseURL: 'https://www.lambdatest.com/selenium-playground/',
    },

    projects: [
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'], headless: true },
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'], headless: false },
        },
        {
            name: 'google-chrome',
            use: { browserName: 'chromium', headless: true },
        },
    ],
    workers: 3,
});