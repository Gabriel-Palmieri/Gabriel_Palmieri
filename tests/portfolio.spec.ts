import { expect, test } from '@playwright/test';
import { mkdir } from 'node:fs/promises';

test('projects support keyboard selection, gallery and real destinations', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  await expect(page.getByRole('tab').first()).toContainText('Camera Jovi');
  await expect(page.locator('#projects')).toContainText('2024 — 2026');
  const first = page.getByRole('tab', { name: 'MobiliAI' });
  await first.click();
  await page.getByRole('button', { name: 'Ver tela 3' }).click();
  await expect(
    page.getByRole('img', { name: 'MobiliAI — tela 3' }),
  ).toBeVisible();
  await first.focus();
  await page.keyboard.press('ArrowRight');
  await expect(page.getByRole('tab', { name: 'Thornfield' })).toBeFocused();
  await expect(page.getByRole('tabpanel')).toContainText('Firebase');
  await expect(
    page.getByRole('link', { name: 'Ver Projeto', exact: true }),
  ).toHaveAttribute('href', 'https://thornfield-a.vercel.app');
  await page.keyboard.press('Home');
  await expect(page.getByRole('tab', { name: 'Camera Jovi' })).toBeFocused();
  await expect(page.getByRole('tab', { name: /Camera Jovi/ })).toBeVisible();
  await expect(
    page.getByRole('img', { name: 'Camera Jovi — tela da câmera' }),
  ).toBeVisible();
  await page.getByRole('button', { name: 'Ver tela 2' }).click();
  await expect(
    page.getByRole('img', { name: 'Camera Jovi — landing page' }),
  ).toBeVisible();
  await expect(page.getByRole('tabpanel')).toContainText('flashcards');
  await expect(
    page.getByRole('link', { name: 'Ver Código', exact: true }),
  ).toHaveAttribute('href', 'https://github.com/CameraJovi/FrontCameraJovi');
  await expect(
    page.getByRole('link', { name: 'Ver Projeto', exact: true }),
  ).toHaveAttribute('href', 'https://front-camera-jovi.vercel.app/');
  await expect(
    page.getByRole('link', { name: 'Ver Landing Page' }),
  ).toHaveAttribute('href', 'https://landingpage-iota-indol.vercel.app/');
  await expect(
    page.getByRole('link', { name: 'Código da Landing Page' }),
  ).toHaveCount(0);
  await page.getByRole('tab', { name: 'Camera Jovi' }).focus();
  await page.keyboard.press('End');
  await expect(page.getByRole('tabpanel')).toContainText('NeoBank');
  await page.keyboard.press('Home');
  await page.keyboard.press('ArrowRight');
  await expect(
    page.getByRole('img', { name: 'MobiliAI — tela 1' }),
  ).toBeVisible();
  await page.getByRole('tabpanel').locator('summary').click();
  await expect(
    page.getByText('Integração com PDVs em tempo real', { exact: true }),
  ).toBeVisible();
  expect(errors).toEqual([]);
});

test('language persists and invalid saved values recover safely', async ({
  page,
}) => {
  await page.addInitScript(() => {
    if (!localStorage.getItem('language'))
      localStorage.setItem('language', 'invalid');
  });
  await page.goto('/');
  await page.getByRole('button', { name: 'Switch to English' }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(
    page.getByRole('heading', { name: 'Featured Projects' }),
  ).toBeVisible();
  await page.reload();
  await expect(
    page.getByRole('button', { name: 'Mudar para português' }),
  ).toBeVisible();
  await page.getByRole('button', { name: 'Mudar para português' }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
});

test('contact provides direct channels without a form', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('tab').first().click({ trial: true });
  const contact = page.locator('#contact');
  await contact.scrollIntoViewIfNeeded();
  await expect(contact.locator('form, input, textarea')).toHaveCount(0);
  await expect(
    contact.getByRole('link', { name: /gabriel1208.palmieri@gmail.com/ }),
  ).toHaveAttribute('href', 'mailto:gabriel1208.palmieri@gmail.com');
  await expect(contact.getByRole('link', { name: /LinkedIn/ })).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/gabriel-palmieri12/',
  );
  await expect(contact.getByRole('link', { name: /GitHub/ })).toHaveAttribute(
    'href',
    'https://github.com/Gabriel-Palmieri',
  );
});

test('navigation and responsive composition', async ({ page }, testInfo) => {
  await page.goto('/');
  await expect(page.locator('[inert]')).toHaveCount(0);
  await page.getByRole('tab').first().click({ trial: true });
  if (testInfo.project.name === 'mobile') {
    await page.getByRole('button', { name: 'Menu', exact: true }).click();
    await expect(page.getByRole('navigation')).toBeVisible();
    await page
      .getByRole('navigation')
      .getByRole('link', { name: 'Sobre', exact: true })
      .click();
    await expect(page.getByRole('navigation')).toBeHidden();
    await page.getByRole('button', { name: 'Menu', exact: true }).click();
    await page.keyboard.press('Escape');
    await expect(
      page.getByRole('button', { name: 'Menu', exact: true }),
    ).toBeFocused();
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.evaluate(() => document.fonts.ready);
  await expect(page.locator('h1')).toHaveCSS('animation-name', 'none');
  const dimensions = await page.evaluate(() => ({
    width: document.documentElement.clientWidth,
    scroll: document.documentElement.scrollWidth,
  }));
  expect(dimensions.scroll).toBe(dimensions.width);
  await expect(page.locator('img').first()).toBeVisible();
  await page.waitForFunction(() =>
    Array.from(document.images).every(
      (image) => image.complete && image.naturalWidth > 0,
    ),
  );
  await mkdir('.impeccable/review', { recursive: true });
  await page.screenshot({
    path: `.impeccable/review/${testInfo.project.name}.png`,
    fullPage: true,
  });
});

test('motion is present when allowed and removed when reduced', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('/');
  await expect(page.locator('#hero-title')).toHaveCSS('animation-name', 'none');
  await page.getByRole('tab', { name: 'MobiliAI' }).click();
  await expect(page.getByRole('tabpanel')).toHaveCSS(
    'animation-name',
    'changeProject',
  );
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(page.locator('#hero-title')).toHaveCSS('animation-name', 'none');
  await expect(page.getByRole('tab', { name: 'MobiliAI' })).toHaveAttribute(
    'aria-selected',
    'true',
  );
});
