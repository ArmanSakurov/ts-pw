import { PlaywrightTestConfig, devices } from '@playwright/test';
import { testConfig } from './testConfig';

const config: PlaywrightTestConfig = {
  globalSetup: `./global-setup`,
  timeout: 60000,
  use: {
    actionTimeout: 20000,
    navigationTimeout: 20000,
  },
  expect: {
    timeout: 10000,
  },
  retries: 0,

  reporter: [[`./CustomReporterConfig.ts`], [`allure-playwright`], [`html`, { outputFolder: 'html-report', open: 'never' }]],

  projects: [
    {
      name: `Chrome`,
      use: {
        browserName: `chromium`,
        channel: `chrome`,
        baseURL: testConfig.baseURL,
        headless: false,
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        launchOptions: {
          slowMo: 0
        }
      },
    },
    {
      name: `Chromium`,
      use: {
        browserName: `chromium`,
        baseURL: testConfig.baseURL,
        headless: true,
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        launchOptions: {
          slowMo: 0
        }
      },
    },

    {
      name: `Firefox`,
      use: {
        browserName: `firefox`,
        baseURL: testConfig.baseURL,
        headless: true,
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        launchOptions: {
          slowMo: 0
        }
      },
    },

    {
      name: `Edge`,
      use: {
        browserName: `chromium`,
        channel: `msedge`,
        baseURL: testConfig.baseURL,
        headless: false,
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        launchOptions: {
          slowMo: 0
        }
      },
    },
    {
      name: `WebKit`,
      use: {
        browserName: `webkit`,
        baseURL: testConfig.baseURL,
        headless: true,
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        launchOptions: {
          slowMo: 0
        }
      },
    },
    {
      name: `Device`,
      use: {
        ...devices[`Pixel 4a (5G)`],
        browserName: `chromium`,
        channel: `chrome`,
        baseURL: testConfig.baseURL,
        headless: true,
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        launchOptions: {
          slowMo: 0
        }
      },
    },
  ],
};
export default config;
