import { Page, BrowserContext, Locator, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly VIDEO_ICON: Locator;
    readonly VIDEO_CONTAINER: Locator;
    readonly ACCEPT_ALL_COOKIES: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.VIDEO_ICON = page.locator('[data-el-pp*="videos"]');
        this.VIDEO_CONTAINER = page.locator('.page__content');
        this.ACCEPT_ALL_COOKIES = page.locator('[data-testid="cwc-accept"]')
    }

    async navigateToURL(): Promise<void> {
        await this.page.goto("/");
        await this.ACCEPT_ALL_COOKIES.click();
    }

    async chooseRandomVideo(): Promise<void> {
        await expect(this.VIDEO_CONTAINER).toBeVisible();
        const videos = await this.VIDEO_ICON.elementHandles();
        const randomIndex = Math.floor(Math.random() * videos.length);
        await videos[randomIndex].click();
    }

    async chooseVideoByIndex(index: number): Promise<void> {
        await expect(this.VIDEO_CONTAINER).toBeVisible();
        const videos = await this.VIDEO_ICON.elementHandles();
        await videos[index + 1].click();
    }
}
