import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import { BasePage } from "../base/BasePage";

export class HomePage extends BasePage{
    readonly VIDEO_THUMBNAIL: Locator;
    readonly VIDEO_CONTAINER: Locator;
    readonly ACCEPT_ALL_COOKIES: Locator;

    constructor(page: Page, context: BrowserContext) {
        super(page, context);
        this.VIDEO_THUMBNAIL = page.locator('[data-el-pp*="videos"]');
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
        const videoCount = await this.VIDEO_THUMBNAIL.count();
        const randomIndex = Math.floor(Math.random() * videoCount);
        await this.VIDEO_THUMBNAIL.nth(randomIndex).click();
    }

    async chooseVideoByIndex(index: number): Promise<void> {
        await expect(this.VIDEO_CONTAINER).toBeVisible();
        await this.VIDEO_THUMBNAIL.nth(index).click();
    }
}
