import puppeteer from 'puppeteer';
import { createUser, deleteUser, randomId } from '../helpers';

describe('Reset', () => {
  let browser: puppeteer.Browser;

  beforeAll(async () => {
    browser = await puppeteer.launch();
  });

  afterAll(async () => {
    browser.close();
  });

  describe('when the email is not in use', () => {
    const email = '__does_not_exist__@gmail.com';

    test('shows the confirmation anyway', async () => {
      const page = await browser.newPage();

      await page.goto('http://localhost:3000/auth/reset');
      await page.waitForSelector('form[data-test="reset-form"]');

      await page.type('input[name="email"]', email);

      await page.click('button[type="submit"]');
      await page.waitForSelector('.verify');

      const messageText = await page.$eval('.verify', message => message.innerHTML);

      expect(messageText).toContain(`If you have an existing Squeaky account you will receive password reset instructions at the email address <b>${email}</b>.`);
    }, 10_000);
  });

  describe('when the email is in use', () => {
    const email = `${randomId()}@email.com`;
    const password = 'Password1!';

    beforeAll(async () => {
      await createUser(email, password);      
    });

    afterAll(async () => {
      await deleteUser(email);
    });

    test('shows the confirmation', async () => {
      const page = await browser.newPage();

      await page.goto('http://localhost:3000/auth/reset');
      await page.waitForSelector('form[data-test="reset-form"]');

      await page.type('input[name="email"]', email);

      await page.click('button[type="submit"]');
      await page.waitForSelector('.verify');

      const messageText = await page.$eval('.verify', message => message.innerHTML);

      expect(messageText).toContain(`If you have an existing Squeaky account you will receive password reset instructions at the email address <b>${email}</b>.`);
    }, 10_000);
  });
});
