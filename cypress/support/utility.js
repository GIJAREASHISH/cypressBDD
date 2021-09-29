/// <reference types="Cypress" />
/**
 * @param  {} 'clickOnLinkText'
 * @param  {} ({text}
 */
 Cypress.Commands.add('clickOnLinkText', ({ text }) => {

    //cy.contains(text).click({force:true})
    cy.get('a').contains(text).click({ force: true })

});

/**
 * @param  {} 'checkLength'
 * @param  {} ({selector
 * @param  {} value}
 */
Cypress.Commands.add('checkLength', ({ selector, value }) => {
    cy.get(selector).then(($el) => {
        cy.wrap($el).should('have.length', value)

    })
});






