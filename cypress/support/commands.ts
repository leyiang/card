/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        /**
         * Create several Todo items via UI
         * @example
         * cy.createDefaultTodos()
         */
        _get(id: string, options?: { timeout?: number }): Chainable<any>
        _find(id: string, options?: { timeout?: number }): Chainable<any>
        pathShouldContain(title: string): Chainable<any>;
    }
}

/**
 * This command cannot pass timeout
 * So, if u really need to pass timeout
 * Use like this : cy.find(id("data-attr-value"))
 */
Cypress.Commands.add('_find', { prevSubject: true }, (subject, id) => {
    return subject.find(`[data-cy="${id}"]`);
});

Cypress.Commands.add('_get', (id, options) => {
    return cy.get(`[data-cy="${id}"]`, options);
});

Cypress.Commands.add('pathShouldContain', (id) => {
    return cy.location().should((location) => {
        expect(location.pathname).to.contain(id)
    });
});