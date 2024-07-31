import rimraf from "rimraf";

async function globalSetup(): Promise<void> {
    await new Promise(resolve => {
        rimraf(`./allure-results`, resolve); // to delete files form 'allure-results' folder
    });
}
export default globalSetup;
