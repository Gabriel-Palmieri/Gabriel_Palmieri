import { expect, test } from '@playwright/test';

test('expanded gallery supports navigation, dismissal and focus restoration', async ({
  page,
}, testInfo) => {
  await page.goto('/');
  const preview = page.getByRole('button', { name: 'Ampliar Camera Jovi' });
  await preview.click({ trial: true });
  const imageBox = await preview.getByRole('img').boundingBox();
  const previewBox = await preview.boundingBox();
  expect(imageBox).not.toBeNull();
  expect(previewBox).not.toBeNull();
  expect(Math.abs(imageBox!.height - previewBox!.height)).toBeLessThan(1);
  await preview.click();
  const gallery = page.getByRole('dialog');
  await expect(gallery).toBeVisible();
  await expect(page.locator('body')).toHaveCSS('overflow', 'hidden');
  await page.screenshot({
    path: `.impeccable/review/gallery-${testInfo.project.name}.png`,
  });
  await gallery.getByRole('button', { name: 'Ver tela 2' }).click();
  await expect(
    gallery.getByRole('button', { name: 'Ver tela 2' }),
  ).toHaveAttribute('aria-pressed', 'true');
  await page.keyboard.press('ArrowLeft');
  await expect(
    gallery.getByRole('button', { name: 'Ver tela 1' }),
  ).toHaveAttribute('aria-pressed', 'true');
  await page.keyboard.press('Escape');
  await expect(gallery).not.toBeVisible();
  await expect(preview).toBeFocused();
  await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden');
});

test('rapid project changes settle on the last tab without stale transitions', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('/');
  await page.getByRole('tab').first().click({ trial: true });
  await page.getByRole('tab', { name: 'MobiliAI' }).focus();
  await page.keyboard.press('ArrowRight');
  await page.keyboard.press('End');
  await page.keyboard.press('Home');
  await page.keyboard.press('ArrowRight');
  const panel = page.getByRole('tabpanel');
  await expect(page.getByRole('tab', { name: 'MobiliAI' })).toHaveAttribute(
    'aria-selected',
    'true',
  );
  await expect(panel.getByRole('heading')).toHaveText('MobiliAI');
  await page.evaluate(async () => {
    await Promise.all(
      document
        .getElementById('project-panel')!
        .getAnimations()
        .map((animation) => animation.finished),
    );
  });
  await expect(panel).toHaveCSS('opacity', '1');
  await expect(panel).toHaveCSS('transform', 'none');
  await expect(panel.getByRole('img')).toHaveAttribute('src', /mobilia1/);
});

test('drag changes screenshots without opening the gallery', async ({
  page,
}) => {
  await page.goto('/');
  await expect(page.locator('[inert]')).toHaveCount(0);
  const preview = page.getByRole('button', { name: 'Ampliar Camera Jovi' });
  await preview.scrollIntoViewIfNeeded();
  await preview.click({ trial: true });
  const box = await preview.boundingBox();
  if (!box) throw new Error('Preview missing');
  await page.mouse.move(box.x + box.width * 0.7, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(box.x + box.width * 0.3, box.y + box.height / 2, {
    steps: 8,
  });
  await page.mouse.up();
  await expect(
    page.getByRole('img', { name: 'Camera Jovi — landing page' }),
  ).toBeVisible();
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await preview.click();
  await expect(page.getByRole('dialog')).toBeVisible();
});
