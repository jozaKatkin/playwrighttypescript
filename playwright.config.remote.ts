import {defineConfig} from '@playwright/test';

require('dotenv').config();

const baseCapabilities = {
    name: 'Playwright Test',
    build: 'Playwright-LambdaTest-Build',
    user: process.env.LT_USERNAME,
    accessKey: process.env.LT_ACCESS_KEY,
    network: true,
    console: true,
    video: true,
};

const createCapabilities = (browserName: string, platform: string, browserVersion = 'latest') => {
    return {
        ...baseCapabilities,
        browserName,
        browserVersion,
        platform,
    };
};

export default defineConfig({
    use: {
        baseURL: 'https://www.lambdatest.com/selenium-playground/',
        headless: false,
        screenshot: 'on',
        video: 'retain-on-failure',
        ignoreHTTPSErrors: true,
    },

    projects: [
        {
            name: 'firefox-remote',
            use: {
                browserName: 'firefox',
                connectOptions: {
                    wsEndpoint: 'wss://cdp.lambdatest.com/playwright?capabilities=' +
                        encodeURIComponent(JSON.stringify(createCapabilities('pw-firefox', 'Windows 10'))),
                },
            },
        },
        {
            name: 'webkit-remote',
            use: {
                browserName: 'webkit',
                connectOptions: {
                    wsEndpoint: 'wss://cdp.lambdatest.com/playwright?capabilities=' +
                        encodeURIComponent(JSON.stringify(createCapabilities('pw-webkit', 'macOS Ventura'))),
                },
            },
        },
        {
            name: 'chrome-remote',
            use: {
                browserName: 'chromium',
                connectOptions: {
                    wsEndpoint: 'wss://cdp.lambdatest.com/playwright?capabilities=' +
                        encodeURIComponent(JSON.stringify(createCapabilities('pw-chromium', 'Windows 10'))),
                },
            },
        },
    ],

    workers: 2,
});