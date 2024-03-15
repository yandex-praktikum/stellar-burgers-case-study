import { Content } from '.';

describe('Form Testing', () => {
  it('should submit the form successfully', () => {
    cy.mount(<Content />);

    cy.get('[data-testid="name-input"]').type('John Doe');
    cy.get('[data-testid="email-input"]').type('john@example.com');
    cy.get('[data-testid="password-input"]').type('securepassword');
    cy.get('[data-testid="repeat-password-input"]').type('securepassword');

    cy.get('button[type="submit"]').click();

    cy.get('[data-testid="success-container"]').should('exist');
  });

  it('error name', () => {
    cy.mount(<Content />);

    cy.get('[data-testid="name-input"]').type('John Doe1');

    cy.get('.input__error').should('have.text', 'Некорректный формат имени');
  });

  it('error email', () => {
    cy.mount(<Content />);

    cy.get('[data-testid="email-input"]').type('john@example.').blur();

    cy.get('.input__error').should('have.text', 'Ой, произошла ошибка!');
  });

  it('error password', () => {
    cy.mount(<Content />);

    cy.get('[data-testid="password-input"]').type('sssss').blur();

    cy.get('.input__error').should('have.text', 'Некорректный пароль');
  });

  it('error repeat password', () => {
    cy.mount(<Content />);

    cy.get('[data-testid="repeat-password-input"]').type('sssss').blur();

    cy.get('.input__error').should('have.text', 'Некорректный пароль');
  });

  it('error both passwords', () => {
    cy.mount(<Content />);

    cy.get('[data-testid="name-input"]').type('John Doe');
    cy.get('[data-testid="email-input"]').type('john@example.com');

    cy.get('[data-testid="password-input"]').type('sssssd');
    cy.get('[data-testid="repeat-password-input"]').type('ssssss');

    cy.get('button[type="submit"]').click();

    cy.get('.input__error').should('have.text', 'Пароли не совпадают');
  });
});
