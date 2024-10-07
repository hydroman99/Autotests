import { test, expect } from '@playwright/test'

test.describe.only('API challenge', () => {
    let URL = 'https://apichallenges.herokuapp.com/';
    let token
    test.beforeEach( async ({ request }) => {
        let response = await request.post(`${URL}challenges`);
        const headers = await response.headers();
        expect(headers).toEqual(expect.objectContaining({'x-challenger': expect.any(String)}))
        token = headers['x-challenger'];
        console.log(headers)
        console.log(token);
    })

    test('Получить список заданий get /challenges API', async ({ request }) => {
        let response = await request.get(`${URL}challenges`);
        expect(response.status()).toBe(200);
        const body = await response.json();
        console.log(body);
    }
)
})
