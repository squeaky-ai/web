import puppeteer from 'puppeteer';

describe('Login', () => {
  describe('when the email is not in use', () => {
    test('it shows a warning', async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.goto('http://localhost:3000/auth/login');
      await page.waitForSelector('form[data-test="login-form"]');

      await page.type('input[name="email"]', '__does_not_exist__@gmail.com');
      await page.type('input[type="password"]', 'password');

      await page.click('button[type="submit"]');
      await page.waitForSelector('.message.error');

      const messageText = await page.$eval('.message.error', message => message.innerHTML);

      expect(messageText).toContain('Email and password combination not recognised');

      browser.close();
    }, 10_000);
  });
});
