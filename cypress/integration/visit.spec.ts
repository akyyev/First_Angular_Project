
// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Visiting the HOME page', () => {
    
    it('should load HOME page', () => {
        cy.visit('/');
        cy.get("[my_id='homeSelector']").should('have.text', 'home works!');
    });

    it('should load error page when I pass wrong url', () => {
        cy.visit('/asdfsdf');
        cy.get("[my_id='errorComponentText']").should('have.text', 'not-found works!');
    });

});