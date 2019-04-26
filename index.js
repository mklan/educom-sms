const puppeteer = require('puppeteer');

async function send({
  user, password, recipient, text,
}) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // login
  await page.goto('https://educom.kontomanager.at/');

  await page.type('#login_rufnummer', user);
  await page.type('#login_passwort', password);
  await page.click('.btn-primary');

  // send
  await page.goto('https://educom.kontomanager.at/websms.php');

  await page.select('#to_netz', 'a');
  await page.type('#to_nummer', recipient);
  await page.type('#nachricht', text);
  await page.click('.btn-primary');

  // await page.screenshot({path: 'example.png'}); // debug
  browser.close();
}

module.exports = send;
