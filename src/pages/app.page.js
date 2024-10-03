import { MainPage, GlobalFeedTab, LoginPage, RegisterPage, SettingsPage  } from "./index";

export class App {
    constructor(page) {
        this.page = page;
        this.mainPage = new MainPage(page);
        this.globalFeedTab = new GlobalFeedTab(page);
        this.loginPage = new LoginPage(page);
        this.registerPage = new RegisterPage(page);
        this.settingsPage = new SettingsPage(page);
    }
}