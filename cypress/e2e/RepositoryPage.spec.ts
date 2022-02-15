/// <reference types="Cypress" />

describe('Accessibility tests', () => {
  beforeEach(() => {
    cy.visit('/repositories');
  });

  it('Visit Repository Page', () => {
    cy.get('#repositories').should('be.visible');

    cy.intercept('GET', 'https://api.github.com/users/vinicinbgs/repos').as(
      'repos'
    );

    cy.waitFor('@repos').then(() => {
      cy.get('[data-type="repository"]').should('be.visible');
    });
  });
});
