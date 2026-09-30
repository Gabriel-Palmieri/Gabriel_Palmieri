import { expect, test } from '@playwright/test';

test('loading is visible on entry and reload, then releases the page', async ({
  page,
}) => {
  await page.goto('/');
  const loading = page
    .getByRole('status')
    .filter({ hasText: 'Carregando portfólio' });
  await expect(loading).toBeVisible();
  await expect(page.locator('[inert]')).toHaveCount(1);
  await expect(loading).toBeHidden({ timeout: 5000 });
  await expect(page.locator('[inert]')).toHaveCount(0);
  await page.reload();
  await expect(loading).toBeVisible();
  await expect(loading).toBeHidden({ timeout: 5000 });
});
