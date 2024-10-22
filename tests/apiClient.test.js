import { test, expect } from "@playwright/test";
import {ApiClient} from '../src/services/apiClient';
import config from "config";

let client;

test.describe("API challenge v3", () => {

  test.beforeAll(async ({ }) => {
    client = await ApiClient.loginAs();
  });

  test("Получить список заданий get /challenges @API", async ({ }) => {
    // todo доделать прокидывание авторизации
    let response = await client.challenger.post();
      expect(response.status).toBe(201);
      expect(response.headers).toEqual(expect.objectContaining({ "x-challenger": expect.any(String) }));
      expect(response.data.challenges.length).toBe(59);
  });
});