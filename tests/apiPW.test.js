import { test, expect } from '@playwright/test'

test.describe.only('API challenge', () => {
    let URL = 'https://apichallenges.herokuapp.com/';
    let token
    test.beforeEach( async ({ request }) => {
        let response = await request.post(`${URL}challenger`);
        const headers = await response.headers();
        token = headers['x-challenger'];
        expect(headers).toEqual(expect.objectContaining({'x-challenger': expect.any(String)}))

    })

    test('Получить список заданий get /challenges @API', async ({ request }) => {
        let response = await request.get(`${URL}challenges`, {
            headers: {
                'x-challenger': token
            }
        })
        const body = await response.json()
        const headers = await response.headers();
        expect(response.status()).toBe(200);
        expect(headers).toEqual(expect.objectContaining({'x-challenger': token}))
        console.log(token)
    }
)
})
