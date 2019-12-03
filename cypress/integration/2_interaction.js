describe('Interaction exercises', function () {

    before('before', function () {
        cy.visit('http://localhost:8080')
    })

    it('when adding a song, then it should be visible in the list', function () {
        cy.get('a[href="#/songs/create"]').should('be.visible').click()
            .get('#sngTitle').type('My Title')
            .get('#sngArtist').type('My Artist')
            .get('#sngGenre').type('My Genre')
            .get('#sngAlbum').type('My Album')
            .get('#sngAlbumImg').type('My Album Image')
            .get('#sngYoutube').type('My Youtube')
            .get('#sngTab').type('My Tabs')
            .get('#sngLyrics').type('My Lyrics')
            .get('#sngBtn').click()
            .get('.song-title').last().contains('My Title').should('be.visible')
    })

    it('when editing a song, then it should store the updated text', function () {
        cy.contains('div[class=song-title]', 'Nevermind')
            .siblings('a')
            .click()
            .get('a[href^="#/songs/"]')
            .click()
            .get('label').contains('Tab').siblings('.input-group__input').children('textarea').type('updated tabs') //required field but empty in default database
            .get('label').contains('Lyrics').siblings('.input-group__input').children('textarea').type('updated lyrics')
            .get('button').contains('Save Song').click()
    })

    it.only('test assertions', function(){
        
        // - Assert that there is no focus on the search field
        cy
        .get('input[aria-label^="Search"]')
        .should('not.have.focus')

        // - Assert that the correct default text is shown in the field
        cy
        .get('input[aria-label^="Search"]')
        .then(($ele)=>{
            expect($ele).to.have.attr('aria-label','Search by song title, artist, album, or genre')
        })
        .should('have.attr','aria-label','Search by song title, artist, album, or genre')
        
        // - Assert that the field gets focus when clicked
        cy
        .get('input[aria-label^="Search"]').click()
        .should('have.focus')
        

        cy
        .get('input[aria-label^="Search"]').click()
        .focused()
        .should('have.attr','aria-label')
        .and('eq','Search by song title, artist, album, or genre')

    })
    
})