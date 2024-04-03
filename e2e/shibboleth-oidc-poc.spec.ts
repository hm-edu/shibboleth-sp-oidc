import { test, expect } from '@playwright/test';

test('Shibboleth OIDC PoC, when authenticated', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByLabel('HM Logo').nth(1)).toBeVisible();
  await expect(page.getByRole('link')).toContainText('Shibboleth OIDC PoC');
  await expect(page.getByRole('button')).toContainText('Abmelden');
  await expect(
    page.getByRole('navigation').getByLabel('HM Logo'),
  ).toBeVisible();
  await expect(
    page.getByText('OIDC Service-Provider Demo with Next.js', { exact: true }),
  ).toBeVisible();
  await expect(
    page.getByText(
      'Welcome! Your pairwiseId is bNOVXZTT4QQWrTZhgzJbQGJ2obI=@hm.edu',
      { exact: true },
    ),
  ).toBeVisible();
});
