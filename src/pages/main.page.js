import { BasePage } from './base.page'

export class MainPage extends BasePage  {
constructor(page) {
    super(page);
    this.menuButton = this.page.locator('.dropdown-toggle');
    this.settingsButton = this.page.getByRole('link', { name: 'Settings' });
    this.signupButton = this.page.getByRole('link', { name: 'Sign up'});
    this.mainPageLoginButton = this.page.getByRole('link', { name: 'Login' });
    this.globalFeed = this.page.getByRole('button', { name: 'Global Feed' });
    this.newArticalButton = this.page.getByRole('link', { name: 'New Article' });
}

async register () {
    await this.signupButton.click();
}
async goToSettings () {
    await this.menuButton.click();
    await this.settingsButton.click();
}
async login () {
    await this.mainPageLoginButton.click();
}
async goToGlobalPage () {
    await this.globalFeed.click();
}
async newArticle () {
    await this.newArticalButton.click();
}
}
