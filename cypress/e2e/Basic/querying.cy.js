describe('Example for Querying', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/querying')
})
  it('Test Get Query', () => {
    cy.get('#query-btn').should('contain', 'Button')
  })

it ('Test Contain Query', () => {
  cy.get('.query-list').contains('bananas').should('have.class', 'third')
  cy.get('.query-list').contains('more apples').should('have.class', 'fourth')
})

it ('Test Within', () => {
  cy.get('.query-form').within(() => {
    cy.get('input:first').should('have.attr', 'placeholder', 'Email')
    cy.get('input:last').should('have.attr', 'placeholder', 'Password')
  })
})

it (' Test Root', () => {
  cy.get('.query-ul').within(() => {
    // In this within, the root is now the ul DOM element
    cy.root().should('have.class', 'query-ul')
  })
})
})