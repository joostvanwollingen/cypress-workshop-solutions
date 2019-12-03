describe('Navigation exercises', function () {

    const doCompare = function (subject,details) {
            return new Promise((resolve,reject) => {
                cy.exec(`npx blink-diff --output screenshot-diff/${details.specName}/${details.name}.png screenshot-baseline/${details.specName}/${details.name}.png screenshots/${details.specName}/${details.name}.png`)
            .its('stderr').should('be.empty')
            .its('code').should('eq',0)
            })
        resolve()
    };

    it('when visiting the main page then the application should be visible', function () {
        cy.visit('http://localhost:8080')
        .get('#app').then((ele)=>{
            expect(ele).to.have.attr('id');
            assert.isNotNull(ele.get(0).id);
        })
        .should('have.attr','id','app')
        .get('#app > main > div > div > div > div:nth-child(1)')
        .screenshot("screenshot_1", {onAfterScreenshot: doCompare})
    })
})