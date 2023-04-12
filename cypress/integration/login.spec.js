import 'cypress-file-upload'
import 'cypress-iframe'
import 'cypress-mailosaur'

// cypress/integration/login.spec.js

it('successfully logs in', () => {
  cy.intercept('GET', '**/notes').as('getNotes')

  cy.visit('/login')
  cy.get('#email').type("d43a249c-fd61-4a21-95d2-ea0eb63c4daf@sidt6wes.mailosaur.net")
  cy.get('#password').type("s3Cre7P@sSw0rd")
  cy.contains('button', 'Login').click()
  cy.contains('h1', 'Your Notes').should('be.visible')
})
