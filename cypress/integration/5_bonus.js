describe('login through cy.request and reuse the cookie', function () {
    it('should load the secure page with the cy.request cookie', function () {

        cy.request(
            {
                method: 'POST',
                url: 'http://the-internet.herokuapp.com/authenticate', // baseUrl is prepended to url
                form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
                body: {
                    username: 'tomsmith',
                    password: 'SuperSecretPassword!'
                }
            })

            .visit('http://the-internet.herokuapp.com/secure')
            .get('h4').contains('Welcome to the Secure Area. When you are done click logout below.')
    })
})

describe('retrieving data from an API for later reuse', function () {
    it('the data from the API can be reused', function () {

        cy.request('https://reqres.in/api/users?page=3').its("body.data").as("userList")
            .then(() => {
                cy.visit('https://www.phptravels.net/register')
                    .get('[name=firstname]')
                    .type(this.userList[0].first_name)
                    .get('[name=lastname]')
                    .type(this.userList[0].last_name)
            })
    })
})