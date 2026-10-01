import { expect, test } from '@playwright/test';

test.use({ reducedMotion: 'no-preference' });

test('about content reappears when scrolling back and the portrait stays in color', async ({ page }) => {
  await page.goto('/');
  const about = page.locator('#about');
  const portrait = about.getByRole('img', { name: 'Gabriel Palmieri' });
  const text = about.locator('[data-scroll-reveal]').last();

  await about.scrollIntoViewIfNeeded();
  await expect(text).not.toHaveClass(/scroll-reveal-hidden/);
  await expect(portrait).toHaveCSS('filter', 'none');

  await page.evaluate(() => window.scrollTo(0, 0));
  await expect(text).toHaveClass(/scroll-reveal-hidden/);

  await about.scrollIntoViewIfNeeded();
  await expect(text).not.toHaveClass(/scroll-reveal-hidden/);
  await expect(portrait).toHaveCSS('filter', 'none');
});

test('reduced motion keeps scroll content readable', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  const text = page.locator('#about [data-scroll-reveal]').last();
  await expect(text).toHaveClass(/scroll-reveal-hidden/);
  await expect(text).toHaveCSS('opacity', '1');
  await expect(text).toHaveCSS('transform', 'none');
});
