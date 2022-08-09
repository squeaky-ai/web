import puppeteer from 'puppeteer';
import { createUser, deleteUser, randomId } from '../helpers';

describe('Login', () => {
  let browser: puppeteer.Browser;

  beforeAll(async () => {
    browser = await puppeteer.launch();
  });

  afterAll(async () => {
    browser.close();
  });

  describe('when the email is not in use', () => {
    test('it shows a warning', async () => {
      const page = await browser.newPage();

      await page.goto('http://localhost:3333/auth/login');
      await page.waitForSelector('form[data-test="login-form"]');

      await page.type('input[name="email"]', '__does_not_exist__@gmail.com');
      await page.type('input[type="password"]', 'password');

      await page.click('button[type="submit"]');
      await page.waitForSelector('.message.error');

      const messageText = await page.$eval('.message.error', message => message.innerHTML);

      expect(messageText).toContain('Email and password combination not recognised');
    }, 10_000);
  });

  describe('when the email is in use but the password is wrong', () => {
    const email = `${randomId()}@email.com`;
    const password = 'Password1!';

    beforeAll(async () => {
      await createUser(email, password);      
    });

    afterAll(async () => {
      await deleteUser(email);
    });

    test('it shows a warning', async () => {
      const page = await browser.newPage();

      await page.goto('http://localhost:3333/auth/login');
      await page.waitForSelector('form[data-test="login-form"]');

      await page.type('input[name="email"]', email);
      await page.type('input[type="password"]', 'password');

      await page.click('button[type="submit"]');
      await page.waitForSelector('.message.error');

      const messageText = await page.$eval('.message.error', message => message.innerHTML);

      expect(messageText).toContain('Email and password combination not recognised');
    }, 10_000);
  });

  describe('when the email is in use and the password is correct', () => {
    const email = `${randomId()}@email.com`;
    const password = 'Password1!';

    beforeAll(async () => {
      await createUser(email, password);      
    });

    afterAll(async () => {
      await deleteUser(email);
    });

    test('it redirects to the app', async () => {
      const page = await browser.newPage();

      await page.goto('http://localhost:3333/auth/login');
      await page.waitForSelector('form[data-test="login-form"]');

      await page.type('input[name="email"]', email);
      await page.type('input[type="password"]', password);

      await page.click('button[type="submit"]');

      await page.waitForNavigation();

      expect(page.url()).toEqual('http://localhost:3333/app/sites');
    }, 10_000);
  });
});
