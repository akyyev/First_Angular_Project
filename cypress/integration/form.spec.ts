
// type definitions for Cypress object "cy"
/// <reference types="cypress" />

import { formPage } from './../support';

describe('Form Tests Suite', () => {
    
    beforeEach(() => {
        cy.visit('/home');
    });
    
    it.only('should fill all form details', () => {
        formPage.getFirstName().type('Cypress');
        formPage.getCommentInputField().type('This is a comment', { delay: 0 });
        formPage.selectContactMethod('Phone');
        formPage.selectRadioButton('1');
        formPage.subscribeToMailingList(true);
        
        formPage.getFormJson().then( $el => {
            expect($el.text()).to.contain('"isSubscribed": true');
        })

        // cy.selectTab('course');

    });
});