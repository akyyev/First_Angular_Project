
// type definitions for Cypress object "cy"
/// <reference types="cypress" />

class FormPage {

    getFirstName(): Cypress.Chainable {
        return cy.get('[name="firstName"]');
    }

    getCommentInputField(): Cypress.Chainable {
        return cy.get('#comment');
    }

    selectContactMethod(contactType: string) {
        cy.get('#contactMethod').select(contactType);
    }

    selectRadioButton(value: string) {
        cy.get('[type="radio"]').check(value);
    }

    subscribeToMailingList(checked?: boolean) {
        if(checked) cy.get('[type="checkbox"]').check();
        else cy.get('[type="checkbox"]').uncheck();
    }

    getFormJson(): Cypress.Chainable {
        return cy.get('[my_id="myFormJson"]');
    }

}

export const formPage = new FormPage();