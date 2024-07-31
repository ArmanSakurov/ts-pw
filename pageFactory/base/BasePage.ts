import { BrowserContext, Page } from "@playwright/test";

export class BasePage {
    protected page: Page;
    protected context: BrowserContext;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
    }
}
