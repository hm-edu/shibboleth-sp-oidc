import { chromium, FullConfig } from '@playwright/test';
import * as fs from 'fs';

export default async function globalSetup(config: FullConfig) {
  const { baseURL, storageState, ignoreHTTPSErrors, headless } =
    config.projects[0].use;

  const stats = fs.existsSync(storageState!.toString())
    ? fs.statSync(storageState!.toString())
    : null;

  if (stats) {
    console.log(`\x1b[2m\tSign in skipped because token is given\x1b[0m`);
    return;
  }

  const browser = await chromium.launch({ headless });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log(`\x1b[2m\tSign in started against '${baseURL}'\x1b[0m`);

  await page.goto(baseURL as string);

  const username = process.env.E2E_USERNAME as string;
  const password = process.env.E2E_PASSWORD as string;

  console.log(`\x1b[2m\tSign in as '${username}'\x1b[0m`);

  await page.getByRole('button', { name: 'Anmelden' }).click();
  await page.getByPlaceholder('Benutzername').fill(username);
  await page.getByPlaceholder('Passwort').fill(password);
  await page.getByRole('button', { name: 'Anmeldung' }).click();

  console.log(`\x1b[2m\tSign in processed\x1b[0m`);

  await page.evaluate(() => {
    window.localStorage.setItem('__language', 'en');
  });
  await page.context().storageState({ path: storageState as string });

  await browser.close();
}
