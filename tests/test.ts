import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }, testInfo) => {
	console.log(`Running ${testInfo.title}`);
	await page.goto('/');
});
  
test('index page has expected h1', async ({ page }) => {
	expect(await page.textContent('h1')).toBe('Hi, I\'m Billy Thomas');
});

test('contact info is on page', async ({ page}) => {
	const email = await page.locator('[data-test=email]');
	expect(await email.textContent()).toBe('billythomasdev@gmail.com');
	expect(await email.getAttribute('href')).toBe("mailto:billythomasdev@gmail.com");

	const linkedInProfile =  await page.locator('data-test=linkedinprofile');
	expect(await linkedInProfile.textContent()).toBe('LinkedIn');
	expect(await linkedInProfile.getAttribute('href')).toBe('https://www.linkedin.com/in/billy-thomas-60330012b/');
	
	const github = await page.locator('data-test=github');
	expect(await github.textContent()).toBe('Github');
	expect(await github.getAttribute("href")).toBe('https://github.com/b42thomas');

	const emotionfm = await page.locator('data-test=emotionfm')
	expect(await emotionfm.textContent()).toBe('Emotion FM')
	expect(await emotionfm.getAttribute("href")).toBe('https://emotion.fm')
});