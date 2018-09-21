// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("search", function(input) {
    cy
        .server()
        .route('/songs?search=*').as('searchRoute')
        .get('input[aria-label="Search by song title, artist, album, or genre"]')
        .type(input)
        .type('{enter}')
        .wait('@searchRoute')
    ;
});

Cypress.Commands.add('login', function(username, password) {
    cy
        .server()
        .route('POST', '/login').as('loginRoute')
        .visit('#/login')
        .get('input[name=email]').type(username)
        .get('input[name=password]').type(password)
        .get('button[name=loginBtn]').click()
        .wait('@loginRoute')
})