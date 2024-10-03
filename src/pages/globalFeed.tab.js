import { BasePage } from "./base.page";

export class GlobalFeedTab extends BasePage {
    constructor(page){
        super(page);
        this.firstPost = this.page.locator('.article-preview').first();
        this.commentField = this.page.getByPlaceholder('Write a comment...');
        this.postCommentButton = this.page.getByRole('button', { name: 'Post Comment' });
    }
    async goToFirstPost() {
        await this.firstPost.click()
    }
    async postSomeComment() {
        await this.commentField.fill('аАААААААААААА');
        await this.postCommentButton.click()
    }

}