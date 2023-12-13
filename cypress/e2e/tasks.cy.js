/// <reference types="Cypress"/>


describe('Tasks management', () =>{
    it('should open and close the task modal', ()=>{
        cy.visit('http://localhost:5173/');
        cy.contains("Add Task").click()
        cy.get('.backdrop').click({force: true});
        cy.get('.backdrop').should('not.exist')
        cy.get('.modal').should('not.exist')
        
        cy.contains("Add Task").click()
        cy.contains('Cancel').click()
        cy.get('.backdrop').should('not.exist')
        cy.get('.modal').should('not.exist')
    })

    it('should create a new task', () =>{
        cy.visit('http://localhost:5173/');
        cy.contains('Add Task').click()
        cy.get('#title').type('This a new task')
        cy.get('#summary').type('This is the description')
        cy.get('.modal').contains('Add Task').click()

        cy.get('.backdrop').should('not.exist')
        cy.get('.modal').should('not.exist')
        cy.get('.task').should('have.length', 1)
        cy.get('.task h2').contains('This a new task')
        cy.get('.task p').contains('This is the description')
    })

    it('should validate the users input', ()=>{
        cy.visit('http://localhost:5173/');
        cy.contains('Add Task').click()
        cy.get('.modal').contains('Add Task').click()
        cy.get('.error-message').should('exist')

    })
})