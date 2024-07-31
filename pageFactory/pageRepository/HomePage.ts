import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import { BasePage } from "../base/BasePage";

export class HomePage extends BasePage{
    readonly VIDEO_ICON: Locator;
    readonly VIDEO_CONTAINER: Locator;
    readonly ACCEPT_ALL_COOKIES: Locator;

    constructor(page: Page, context: BrowserContext) {
        super(page, context);
        this.VIDEO_ICON = page.locator('[data-el-pp*="videos"]');
        this.VIDEO_CONTAINER = page.locator('.page__content');
        this.ACCEPT_ALL_COOKIES = page.locator('[data-testid="cwc-accept"]')
    }

    async navigateToURL(): Promise<void> {
        await this.page.goto("/");
    }

    async acceptCookies(): Promise<void> {
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
