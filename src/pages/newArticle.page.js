import { BasePage } from "./base.page";


export class NewArticlePage extends BasePage {
    constructor (page) {
        super(page);
        this.articleTitle = this.page.getByRole('link', { name: 'New Article' })
        this.articleDescription = this.page.getByPlaceholder('What\'s this article about?')
        this.articleBody = this.page.getByPlaceholder('Write your article (in')
        this.enterTags = this.page.getByPlaceholder('Enter tags')
        this.publishButton = this.page.getByRole('button', { name: 'Publish Article' })
    }

    async createArticle (titleText = '', descText = '', bodyText = '', tagsText = '') {
        await this.articleTitle.fill(fillTitle);
        await this.articleDescription.fill(fillDesc);
        await this.articleBody.fill(fillBody);
        await this.enterTags.fill(tagsText);
        await this.publishButton.click()
}
}