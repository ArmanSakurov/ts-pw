import test from '@lib/BaseTest';
import { expect } from "@playwright/test";

test(`Generate and verify HAR file for Home Page.`, async ({ page, homePage, player }) => {
    // To record HAR file use below line where "update:true"
    // This line creates a directory named har and stores all the har related files in it.
    await page.routeFromHAR('har/homePage.har', { update: true });

    // Once you record the har file you can uncomment the below line for Network Replay with update:false
    //The below line uses the har file from the recoded directory.
    // await page.routeFromHAR('har/homePage.har',{ update:false });
    await homePage.navigateToURL();
    await homePage.chooseVideoByIndex(1);
    await player.waitForFullVideoSectionToDisappear();
    const videoIsPlaying = await player.isVideoPlaying();
    expect(videoIsPlaying).toBeTruthy();
    const videoIsMuted = await player.isMuted();
    expect(videoIsMuted).toBeTruthy();
});
