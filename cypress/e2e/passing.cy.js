it('passes', () => {
  cy.visit('/cypress/fixtures/test.html')
  cy.get('#button').click()
})
