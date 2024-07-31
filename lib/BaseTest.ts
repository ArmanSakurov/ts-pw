import { test as baseTest } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { HomePage } from "@pages/HomePage";
import { Player } from "@pages/Player";

const test = baseTest.extend<{
    homePage: HomePage;
    player: Player;
    makeAxeBuilder: AxeBuilder;
}>({
    homePage: async ({ page, context }, use) => {
        await use(new HomePage(page, context));
    },
    player: async ({ page, context }, use) => {
        await use(new Player(page, context));
    },
    makeAxeBuilder: async ({ page }, use) => {
        await use(new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']));
            // .exclude('selector')); // Exclude element from analysis
    }
})

export default test;
