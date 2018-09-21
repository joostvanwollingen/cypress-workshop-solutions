describe('Isolation exercises', function () {

    it('should retrieve songs', function () {
        cy
            .server()
            .route('GET', '/songs', [{"id":1,
                "title":"Nevermind",
                "artist":"Nirvana",
                "genre":"Alternative Rock",
                "album":"Nevermind",
                "albumImageUrl":"https://is3-ssl.mzstatic.com/image/thumb/Features/d0/cc/62/dj.nanioukp.jpg/268x0w.jpg",
                "youtubeId":"m-ofL_3EZyE",
                "lyrics":"",
                "tab":"",
                "createdAt":"2018-02-13T12:56:24.432Z",
                "updatedAt":"2018-02-13T12:56:24.432Z"}])
            .visit('http://localhost:8080')
            .get('[class=song-artist]').contains('Nirvana').should('be.visible')
            .get('[class=song-title]').contains('Nevermind').should('be.visible')
    })

    it('should retrieve songs after 10 seconds', function () {
        cy
            .server({delay: 10000})
            .route('GET', '/songs', [{"id":1,
                "title":"Nevermind",
                "artist":"Nirvana",
                "genre":"Alternative Rock",
                "album":"Nevermind",
                "albumImageUrl":"https://is3-ssl.mzstatic.com/image/thumb/Features/d0/cc/62/dj.nanioukp.jpg/268x0w.jpg",
                "youtubeId":"m-ofL_3EZyE",
                "lyrics":"",
                "tab":"",
                "createdAt":"2018-02-13T12:56:24.432Z",
                "updatedAt":"2018-02-13T12:56:24.432Z"}]).as('songsRoute')
            .visit('http://localhost:8080')
            .wait('@songsRoute')
            .get('[class=song-artist]').contains('Nirvana').should('be.visible')
            .get('[class=song-title]').contains('Nevermind').should('be.visible')
    })

})