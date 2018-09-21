describe('Structure exercises', function () {

    before('before', function () {
        cy
            .visit('http://localhost:8080')
    })

    it('should search on song title', function () {
        cy.visit('http://localhost:8080/')
        .search('blood')
        .get('.song-title').should('contain','In the blood')
    })

    it('should display the song when searching for artis', function () {
        cy.visit('http://localhost:8080/')
        .search('3 Steps Ahead')
        .get('div').contains('Drop it').should('be.visible')
    })

    it('should display an error on no results', function () {
        cy.visit('http://localhost:8080/')
        .search('blabla')
        .get('div').contains('No slot content defined.').should('be.visible')
    })
    
    it('should be able to login', function() {
        cy
            .clock()
            .visit('http://localhost:8080/')
            .login('hoi@hoi.com', 'hallo123')
            .get('button > div').contains('Log Out').should('be.visible')
    })
})