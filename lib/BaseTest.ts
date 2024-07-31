import { test as baseTest } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { HomePage } from "@pages/HomePage";
import { VideoPage } from "@pages/VideoPage";

const test = baseTest.extend<{
    homePage: HomePage;
    videoPage: VideoPage;
    makeAxeBuilder: AxeBuilder;
}>({
    homePage: async ({ page, context }, use) => {
        await use(new HomePage(page, context));
    },
    videoPage: async ({ page, context }, use) => {
        await use(new VideoPage(page, context));
    },
    makeAxeBuilder: async ({ page }, use) => {
        await use(new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']));
            // .exclude('selector')); // Exclude element from analysis
    }
})

export default test;
