import { UserBuilder } from "../builders/user.builder";
import { App } from '../../pages/app.page';
import { test as base } from '@playwright/test'

const url = 'https://realworld.qa.guru/#/';

export const test = base.extend({
    
  registerFixture: async ({ page }, use) => {
    
    const newUser = new UserBuilder().addBio().addEmail().addName().addPassword().generate();
    const app = new App(page);
    
    await app.mainPage.open(url);
    await app.mainPage.register();
    await app.registerPage.enterUsername(newUser.userName);
    await app.registerPage.enterEmail(newUser.userEmail);
    await app.registerPage.enterPassword(newUser.userPassword);
    await app.registerPage.clickSignup()
    await use(app);
  }
});

export { expect } from'@playwright/test'