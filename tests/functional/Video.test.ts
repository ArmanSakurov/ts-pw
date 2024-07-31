import test from '@lib/BaseTest';
import { expect } from "@playwright/test";

test(`Verify video availability`, { tag: '@Smoke'}, async ({ homePage, player }) => {
    await test.step(`Open home page and choose video`, async () => {
        await homePage.navigateToURL();
        await homePage.chooseRandomVideo();
    });

    await test.step(`Check video is playing`, async () => {
        await player.waitForFullVideoSectionToDisappear();

        const videoIsPlaying = await player.isVideoPlaying();
        expect(videoIsPlaying).toBeTruthy();
    });

    await test.step(`Check audio is muted`, async () => {
        const videoIsMuted = await player.isMuted();
        expect(videoIsMuted).toBeTruthy();
    });
}); 
