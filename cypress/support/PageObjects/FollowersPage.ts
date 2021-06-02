
// type definitions for Cypress object "cy"
/// <reference types="cypress" />

class Followers {

    getContainers(): Cypress.Chainable {
        return cy.get('.media');
    }
}

export const followers = new Followers();
