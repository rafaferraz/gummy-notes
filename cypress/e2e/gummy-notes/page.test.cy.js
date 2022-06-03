/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Main page integration test', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  it('Open login dialog', () => {
    cy.get('#dialog-backdrop').should('not.exist');
    cy.get(':nth-child(1) > .px-1 > .flex > .text-md').click();
    cy.get('.m-auto > .text-3xl').should('contain', 'Bem vindo(a)!');
  });

  it('Close login dialog', () => {
    cy.get('#dialog-backdrop').should('not.exist');
    cy.get(':nth-child(1) > .px-1 > .flex > .text-md').click();
    cy.get('.m-auto > .text-3xl').should('contain', 'Bem vindo(a)!');
    cy.get('.mt-6').click();
    cy.get('#dialog-backdrop').should('not.exist');
  });

  it('Open sign up dialog', () => {
    cy.get('#dialog-backdrop').should('not.exist');
    cy.get(':nth-child(2) > .px-1 > .flex > .text-md').click();
    cy.get('.m-auto > .text-3xl').should('contain', 'Crie sua conta');
  });

  it('Close sign up dialog', () => {
    cy.get('#dialog-backdrop').should('not.exist');
    cy.get(':nth-child(2) > .px-1 > .flex > .text-md').click();
    cy.get('.m-auto > .text-3xl').should('contain', 'Crie sua conta');
    cy.get('.mt-6').click();
    cy.get('#dialog-backdrop').should('not.exist');
  });

  it('Add new note to the current board', () => {
    cy.get('.w-56').should('not.exist');
    cy.get('.drop-shadow-xl > .w-24').click();
    cy.get('.w-56').should('exist');
  });
});
