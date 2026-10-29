import { expect, test } from '@playwright/test';

test.use({ reducedMotion: 'no-preference' });

test('about content exits and reappears when scrolling in either direction', async ({
  page,
}) => {
  await page.goto('/');
  const about = page.locator('#about');
  const portrait = about.getByRole('img', { name: 'Gabriel Palmieri' });
  const text = about.locator('[data-scroll-reveal]').last();

  await page.getByRole('tab').first().click({ trial: true });
  await text.scrollIntoViewIfNeeded();
  await expect(text).not.toHaveClass(/(^|\s)scroll-reveal-hidden(\s|$)/);
  await expect(portrait).toHaveCSS('filter', 'none');

  await page.evaluate(() => window.scrollTo(0, 0));
  await expect(text).toHaveClass(/(^|\s)scroll-reveal-hidden(\s|$)/);

  await text.scrollIntoViewIfNeeded();
  await expect(text).not.toHaveClass(/(^|\s)scroll-reveal-hidden(\s|$)/);
  await expect(portrait).toHaveCSS('filter', 'none');
  await page.locator('#contact').scrollIntoViewIfNeeded();
  await expect(text).toHaveClass(/(^|\s)scroll-reveal-hidden(\s|$)/);
  await text.scrollIntoViewIfNeeded();
  await expect(text).not.toHaveClass(/(^|\s)scroll-reveal-hidden(\s|$)/);
});

test('reduced motion keeps scroll content readable', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  const text = page.locator('#about [data-scroll-reveal]').last();
  await expect(text).toHaveClass(/(^|\s)scroll-reveal-hidden(\s|$)/);
  await expect(text).toHaveCSS('opacity', '1');
  await expect(text).toHaveCSS('transform', 'none');
});
