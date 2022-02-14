/// <reference types="Cypress" />

describe('Accessibility tests', () => {
  beforeEach(() => {
    cy.visit('/repositories');
  });

  it('Visit Repository Page', () => {
    cy.get('#repositories').should('be.visible');
    cy.get('[data-type="repository"]').should('be.visible');
  });
});
