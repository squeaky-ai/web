import puppeteer from 'puppeteer';

describe('Accept', () => {
  let browser: puppeteer.Browser;

  beforeAll(async () => {
    browser = await puppeteer.launch();
  });

  afterAll(async () => {
    browser.close();
  });

  describe('when there is no token in the query params', () => {
    test('shows the confirmation anyway', async () => {
      const page = await browser.newPage();

      await page.goto('http://localhost:3000/auth/accept');
      await page.waitForSelector('.invalid-invidation');

      const messageText = await page.$eval('.invalid-invidation', message => message.innerHTML);

      expect(messageText).toContain('Your invitation link is no longer valid, please contact the site owner to request a new invitation');
    }, 10_000);
  });

  describe('when there is a token but it is garbage', () => {
    test('shows the confirmation anyway', async () => {
      const page = await browser.newPage();

      await page.goto('http://localhost:3000/auth/accept?token=ImALittleTeapot');
      await page.waitForSelector('.invalid-invidation');

      const messageText = await page.$eval('.invalid-invidation', message => message.innerHTML);

      expect(messageText).toContain('Your invitation link is no longer valid, please contact the site owner to request a new invitation');
    }, 10_000);
  });
});
