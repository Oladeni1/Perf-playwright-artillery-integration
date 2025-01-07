import { test, expect } from '@playwright/test';
import * as OTPAuth from 'otpauth';


test('test', async ({ page }) => {

  let totp = new OTPAuth.TOTP({
    issuer: 'ACME',
    label: 'AzureDiamond',
    algorithm: 'SHA1',
    digits: 6,
    period: 30,
    secret: process.env.HEROKU_SECRET // or "OTPAuth.Secret.fromB32('NB2W45DFOIZA')"

    //otpauth://totp/ACME:AzureDiamond?issuer=ACME&secret=NB2W45DFOIZA&algorithm=SHA1&digits=6&period=30

  });

  await page.goto('https://id.heroku.com/login');
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();
  await page.locator('#email').pressSequentially(process.env.HEROKU_EMAIL); 
  await page.locator('#password').pressSequentially(process.env.HEROKU_PASSWORD);
  await page.getByRole('button', { name: 'Log In' }).click();

  // Generate TOTP token.
  let token = totp.generate();

  await page.locator('//input[@id="input-9"]').pressSequentially(token);
  await page.getByRole('button', { name: 'Verify' }).click({force: true});

});