
import { followers } from '../support'

describe('My Followers Tests Suite', () => {
    beforeEach(() => {
        
        cy.fixture('./../fixtures/myFollowers').then(json => {
            cy.mockFollowers(200, json);
        });

        cy.visit('/followers');

    });
    
    it('should load 3 followers', () => {
        followers.getContainers().should('have.length', 4);
    });
});