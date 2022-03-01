import puppeteer from 'puppeteer';
import { createUser, deleteUser, randomId } from '../helpers';

describe('Signup', () => {
  let browser: puppeteer.Browser;

  beforeAll(async () => {
    browser = await puppeteer.launch();
  });

  afterAll(async () => {
    browser.close();
  });

  describe('when the email is not in use', () => {
    const email = `${randomId()}@email.com`;
    const password = 'Password1!';
    
    afterAll(async () => {
      await deleteUser(email);
    });

    test('tells them to go and check their email to confirm', async () => {
      const page = await browser.newPage();

      await page.goto('http://localhost:3000/auth/signup');
      await page.waitForSelector('form[data-test="signup-form"]');

      await page.type('input[name="email"]', email);
      await page.click('.checkbox .check');

      await page.click('button[type="submit"]');
      await page.waitForSelector('input[type="password"]');
      
      await page.type('input[type="password"]', password);
      await page.click('button[type="submit"]');

      await page.waitForSelector('.verify');
      
      const messageText = await page.$eval('.verify p', message => message.innerHTML);

      expect(messageText).toContain(`To log in to your account, please open the verification email sent to <b>${email}</b> and click the link provided.`);
    }, 10_00);
  });

  describe('when the email is already in use', () => {
    const email = `${randomId()}@email.com`;
    const password = 'Password1!';

    beforeAll(async () => {
      await createUser(email, password);      
    });

    afterAll(async () => {
      await deleteUser(email);
    });

    test('it promps them to log in', async () => {
      const page = await browser.newPage();

      await page.goto('http://localhost:3000/auth/signup');
      await page.waitForSelector('form[data-test="signup-form"]');

      await page.type('input[name="email"]', email);
      await page.click('.checkbox .check');

      await page.click('button[type="submit"]');
      await page.waitForSelector('.message.info');

      const messageText = await page.$eval('.message.info', message => message.innerHTML);

      expect(messageText).toContain(`A user with the email address ${email} already exists. Please choose from the options below.`);
    }, 10_000);
  });
});
