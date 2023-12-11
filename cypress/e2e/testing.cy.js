/// <reference types="Cypress"/>

describe('Tasks Page', () => {
  it('should render the main image', () => {
    cy.visit('http://localhost:5173/');
    cy.get('.main-header img')
  })

  it('should contain the page header', () =>{
    cy.visit('http://localhost:5173/');
    cy.get('h1').contains('React Tasks')
    cy.get('h1').should('exist')
    cy.get('h1').should('have.length', 1)
  })
})