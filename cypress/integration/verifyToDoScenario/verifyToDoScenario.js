import { Given, Then,When } from "cypress-cucumber-preprocessor/steps";

Given('Open web page', () => {
    cy.openWebPage()
})

When('Enter Values to Placeholder', () => {
    cy.fixture('input.json').as('data').then((data) => {
        /* Iterate taskname from json and enter in placeholder */
        data.taskName.forEach(function (element, index) {
          cy.enterValuesinTextBox({ inputValue: data.taskName[index] });
  
        })
      })

      When('Mark task complete', () => {
        cy.checkTask({ taskneedtocheck: 3 })
})

When('Click on Complete Filter link', () => {
    cy.clickOnLinkText({ text: 'Completed' })
})

Then('Result should be match with completed task in Complete Filter', () => {
    cy.checkLength({ selector: '.todo-list li', value: 3 })
})
})