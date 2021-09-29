// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// const supportModules = require('../../support');
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
/**
 * This function is for enter todo task name in placeholder
 * @param  {} 'enterValuesinTextBox'
 * @param  {} ({inputValue}
 */
 Cypress.Commands.add('enterValuesinTextBox', ({ inputValue }) => {


    cy.get('input[class="new-todo"]').click({ force: true }).type(inputValue).type("{enter}")

});

/**
 * This function is for Click on radio button to mark completed
 * @param  {} 'checkTask'
 * @param  {} ({taskneedtocheck}
 */
Cypress.Commands.add('checkTask', ({ taskneedtocheck }) => {

    cy.get('.todo-list li').find('.toggle').each(($el, index, $list) => {
        // $el is a wrapped jQuery element
        if (index < taskneedtocheck) {
            //   wrap this element so we can
            //   use cypress commands on it
            cy.wrap($el).check()
        }
    })

});

/**
 * Function is for open web page
 * @param  {} 'openWebPage'
 * @param  {} (
 * @param  {}} =>{cy.visit("https
 */
Cypress.Commands.add('openWebPage', () => {

    cy.visit(Cypress.env('url'))

})






