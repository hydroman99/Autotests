import { BasePage } from "./base.page";


export class NewArticlePage extends BasePage {
    constructor (page) {
        super(page);
        this.articleTitle = this.page.getByPlaceholder('Article Title')
        this.articleDescription = this.page.getByPlaceholder('What\'s this article about?')
        this.articleBody = this.page.getByPlaceholder('Write your article (in')
        this.enterTags = this.page.getByPlaceholder('Enter tags')
        this.publishButton = this.page.getByRole('button', { name: 'Publish Article' })
    }

    async createArticle (titleText = '', descText = '', bodyText = '', tagsText = '') {
        await this.articleTitle.fill(titleText);
        await this.articleDescription.fill(descText);
        await this.articleBody.fill(bodyText);
        await this.enterTags.fill(tagsText);
        await this.publishButton.click()
}
}