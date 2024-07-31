import { Page, BrowserContext } from '@playwright/test';
import { BasePage } from "../base/BasePage";
import { Player } from "../components/Player";

export class VideoPage extends BasePage {
    player: Player;
    constructor(page: Page, context: BrowserContext) {
        super(page, context);
        this.player = new Player(page);
    }
}
