import { test, expect } from "@playwright/test";
import { ApiClient } from '../src/services/apiClient';

let client;

test.describe("API challenge v3", () => {

  test.beforeAll(async ({ }) => {
    client = await ApiClient.loginAs();
  });

  test("Проверить получение токена post/challenger @API", async ({ }) => {
    let response = await client.challenger.post();
      expect(response.status).toBe(201);
      expect(response.headers).toEqual(expect.objectContaining({ "x-challenger": expect.any(String) }));
  });

  test("Проверить получение токена get/challenges @API", async ({ }) => {
    
      let response = await client.challenges.get();
      console.log(client.token)
      expect(response.status).toBe(200);
      expect(response.data.challenges.length).toBe(59)
  });
});