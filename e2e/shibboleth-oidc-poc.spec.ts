import { test, expect } from '@playwright/test';

test("Shibboleth OIDC PoC', when not authenticated", async ({ page }) => {
  await page.goto('/');
  await expect(page.getByLabel('HM Logo').nth(1)).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Shibboleth OIDC PoC' }),
  ).toBeVisible();
  await expect(page.getByRole('button', { name: 'Anmelden' })).toBeVisible();
  await expect(
    page.getByRole('navigation').getByLabel('HM Logo'),
  ).toBeVisible();
});
