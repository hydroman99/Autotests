import { expect } from '@playwright/test';
import { test } from '../src/helpers/fixtures/fixture'


test.describe('Page Object ',() => {

  test('Пользователь может изменить bio. Page Object - middle version', async ({ registerFixture }) => {
    await registerFixture.mainPage.goToSettings();
    await registerFixture.settingsPage.enterUserBio('');
    await registerFixture.settingsPage.updateProfileSimple();
    await expect(registerFixture.settingsPage.bioField).toContainText('')

});

  test('Пользователь может оставить комментарий', async ({ registerFixture }) => {
    await registerFixture.mainPage.goToGlobalPage();
    await registerFixture.globalFeedTab.goToFirstPost()
    await registerFixture.globalFeedTab.postSomeComment();
})
  test('Пользователь может написать новую статью', async ({ registerFixture }) => {
    
})
})