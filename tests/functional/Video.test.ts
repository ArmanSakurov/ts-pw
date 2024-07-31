import test from '@lib/BaseTest';
import { expect } from "@playwright/test";

test(`Verify video availability`, { tag: '@Smoke'}, async ({ homePage, videoPage }) => {
    await test.step(`Open home page and choose video`, async () => {
        await homePage.navigateToURL();
        await homePage.acceptCookies();
        await homePage.chooseRandomVideo();
    });

    await test.step(`Check video is playing`, async () => {
        await videoPage.player.waitForFullVideoSectionToDisappear();

        const videoIsPlaying = await videoPage.player.isVideoPlaying();
        expect(videoIsPlaying).toBeTruthy();
    });

    await test.step(`Check audio is muted`, async () => {
        const videoIsMuted = await videoPage.player.isMuted();
        expect(videoIsMuted).toBeTruthy();
    });
}); 
