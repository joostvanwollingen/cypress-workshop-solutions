describe('Navigation exercises', function () {

    it('when visiting the main page then the application should be visible', function () {
        cy.visit('http://localhost:8080')
        .get('#app').should('be.visible')
    })
})