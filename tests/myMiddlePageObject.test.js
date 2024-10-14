import { expect } from '@playwright/test';
import { test } from '../src/helpers/fixtures/fixture'
import { convertHexToRGB } from '../src/helpers/builders/cssConvertors'
import { checkColor } from '../src/helpers/functions/checkColor'


test.describe('Page Object ',() => {

  test('Пользователь может изменить bio. Page Object - middle version', async ({ registerFixture }) => {
    await registerFixture.mainPage.goToSettings();
    await registerFixture.settingsPage.enterUserBio('');
    await registerFixture.settingsPage.updateProfileSimple();
    await expect(registerFixture.settingsPage.bioField).toContainText('')

});

  test('Пользователь может оставить комментарий', async ({ registerFixture, page }) => {
    await registerFixture.mainPage.goToGlobalPage();
    await registerFixture.globalFeedTab.goToFirstPost();
    await registerFixture.globalFeedTab.postSomeComment();
    await registerFixture.reload();
    await registerFixture.mainPage.goToHome.click()
})
  test('Пользователь может написать новую статью', async ({ registerFixture }) => {
    await registerFixture.mainPage.newArticle();
    await registerFixture.newArticlePage.createArticle('I am Title', 'aa', 'aa', 'aa');
})
  test('Проверка цвета Логотипа', async ({registerFixture}) => {
    let hexColor = '#5cb85c'
    let rgbColors = convertHexToRGB(hexColor)
    const logo = await registerFixture.mainPage.logo
    await checkColor(logo, 'color', rgbColors)
  })
})