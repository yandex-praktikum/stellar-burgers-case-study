import { Content } from '.';
import { test, expect } from '@playwright/experimental-ct-react';

test.describe('Form Testing', () => {
  test('should submit the form successfully', async ({ mount }) => {
    const component = await mount(<Content />);

    await component.getByTestId('name-input').fill('John Doe');
    await component.getByTestId('email-input').fill('john@example.com');
    await component.getByTestId('password-input').fill('securepassword');
    await component.getByTestId('repeat-password-input').fill('securepassword');

    await component.locator('button[type="submit"]').click();

    const value = component.getByTestId('success-container');

    await expect(value).toHaveCount(1);
  });

  test('error name', async ({ mount }) => {
    const component = await mount(<Content />);

    const nameInput = component.getByTestId('name-input');
    await nameInput.fill('John Doe1');
    await nameInput.blur();

    const value = component.locator('.input__error');

    await expect(value).toContainText('Некорректный формат имени');
  });

  test('error email', async ({ mount }) => {
    const component = await mount(<Content />);

    const emailInput = component.getByTestId('email-input');
    await emailInput.fill('john@example.');
    await emailInput.blur();

    const value = component.locator('.input__error');

    await expect(value).toContainText('Ой, произошла ошибка!');
  });

  test('error password', async ({ mount }) => {
    const component = await mount(<Content />);

    const passwordInput = component.getByTestId('password-input');
    await passwordInput.fill('sssss');
    await passwordInput.blur();

    const value = component.locator('.input__error');

    await expect(value).toContainText('Некорректный пароль');
  });

  test('error repeat password', async ({ mount }) => {
    const component = await mount(<Content />);

    const repeatPasswordInput = component.getByTestId('repeat-password-input');
    await repeatPasswordInput.fill('sssss');
    await repeatPasswordInput.blur();

    const value = component.locator('.input__error');

    await expect(value).toContainText('Некорректный пароль');
  });

  test('error both passwords', async ({ mount }) => {
    const component = await mount(<Content />);

    await component.getByTestId('name-input').fill('John Doe');
    await component.getByTestId('email-input').fill('john@example.com');
    await component.getByTestId('password-input').fill('sssssd');
    await component.getByTestId('repeat-password-input').fill('ssssss');

    await component.locator('button[type="submit"]').click();

    const value = component.locator('.input__error');

    await expect(value).toContainText('Пароли не совпадают');
  });
});
