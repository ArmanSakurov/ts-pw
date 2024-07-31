import test from '@lib/BaseTest';
import { expect } from "@playwright/test";

test(`Verify page accessibility`, async ({ makeAxeBuilder, homePage }) => {
    await homePage.navigateToURL();
    await homePage.acceptCookies();
    const accessibilityScanResults = await makeAxeBuilder.analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
});
