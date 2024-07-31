import { Page, Locator } from '@playwright/test';

export class Player {
    private page: Page;
    readonly GET_FULL_VIDEO_SECTION: Locator;
    readonly LEFT_TOGGLE: Locator;

    constructor(page: Page) {
        this.page = page;
        this.GET_FULL_VIDEO_SECTION = page.locator('.video-purchase__menu-buttons');
        this.LEFT_TOGGLE = page.locator('.video-purchase__menu-toggle .icon_sc-left');
    }

    async waitForFullVideoSectionToDisappear(): Promise<void> {
        await this.GET_FULL_VIDEO_SECTION.waitFor({ state: 'visible' });
        await this.LEFT_TOGGLE.waitFor({ state: 'visible' });
    }

    async isVideoPlaying(): Promise<boolean> {
        return await this.page.evaluate(() => {
            const video = document.querySelector('video');
            return video && !video.paused;
        });
    }

    async isMuted(): Promise<boolean> {
        return await this.page.evaluate(() => {
            const video = document.querySelector('video');
            return video && video.muted;
        });
    }
}
