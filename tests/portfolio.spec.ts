import { expect, test } from '@playwright/test';
import { mkdir } from 'node:fs/promises';

test('projects support keyboard selection, gallery and real destinations', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
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
  await page.keyboard.press('End');
  await expect(page.getByRole('tabpanel')).toContainText('NeoBank');
  await page.keyboard.press('Home');
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

test('contact validates fields and keeps entered text when sending is unavailable', async ({
  page,
}) => {
  await page.route('https://api.emailjs.com/**', (route) =>
    route.fulfill({ status: 503, body: 'Test failure' }),
  );
  await page.goto('/#contact');
  await page.getByRole('button', { name: 'Enviar Mensagem' }).click();
  await expect(page.locator('#name')).toBeFocused();
  await page.getByLabel('Nome', { exact: true }).fill('Teste local');
  await page.getByLabel('E-mail', { exact: true }).fill('teste@example.com');
  await page
    .getByLabel('Mensagem', { exact: true })
    .fill('Mensagem de teste, sem envio real.');
  await page.getByRole('button', { name: 'Enviar Mensagem' }).click();
  await expect(page.getByRole('status')).toContainText(
    /Envio indisponível|Erro ao enviar/,
  );
  await expect(page.getByLabel('Mensagem', { exact: true })).toHaveValue(
    'Mensagem de teste, sem envio real.',
  );
});

test('navigation and responsive composition', async ({ page }, testInfo) => {
  await page.goto('/');
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
