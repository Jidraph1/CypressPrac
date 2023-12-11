/// <reference types="Cypress"/>


describe('Tasks management', () =>{
    it('should open and close the task modal', ()=>{
        cy.visit('http://localhost:5173/');
        cy.contains("Add Task").click()
        cy.get('.backdrop').click({force: true});
    })
})