import * as puppeteer from 'puppeteer';

type SendOptions = {
  user: string;
  password: string;
  recipient: string;
  text: string;
  provider?: 'xoxo' | 'educom';
};

export default async function send({
  user,
  password,
  recipient,
  text,
  provider = 'educom',
}: SendOptions) {
  const baseUrl = `https://${provider}.kontomanager.at`;

  console.time('send');
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // login
  await page.goto(baseUrl);

  await page.type('#login_rufnummer', user);
  await page.type('#login_passwort', password);
  await page.click('.btn-primary');

  // send
  await page.goto(`${baseUrl}/websms.php`);

  await page.select('#to_netz', 'a');
  await page.type('#to_nummer', recipient);
  await page.type('#nachricht', text);
  await page.click('.btn-primary');

  browser.close();
  console.timeEnd('send');
}
