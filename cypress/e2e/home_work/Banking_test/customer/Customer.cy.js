describe('example Customer', () => {

    beforeEach(() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    })

    it('TC-01 Deposit ', () => {
        // customer button
        cy.get('.borderM > :nth-child(1) > .btn').click()
        cy.get("#userSelect").select('Harry Potter')
        cy.get('form.ng-valid > .btn').click()
        cy.get('[ng-class="btnClass2"]').click()
        cy.get('.form-control').type('1234')
        cy.get('form.ng-dirty > .btn').click()
        cy.wait(3000)
        cy.get('.form-control').type('2556')
        cy.get('form.ng-dirty > .btn').click()
        cy.wait(6000)
        cy.get('[ng-class="btnClass1"]').click()
        cy.wait(10000)
    })

    it('TC-02 withdraw', () => {
        cy.get('.borderM > :nth-child(1) > .btn').click()
        cy.get('#userSelect').select('Harry Potter')
        cy.get('form.ng-valid > .btn').click()

        cy.get('[ng-class="btnClass2"]').click()
        cy.get('.form-control').type('21234')
        cy.get('form.ng-dirty > .btn').click()
        cy.wait(5000)


        cy.get('[ng-class="btnClass3"]').click()
        cy.wait(4000)
        cy.get('.form-control').type('1234')
        cy.get('form.ng-dirty > .btn').click()

        cy.wait(6000)
        cy.get('[ng-class="btnClass1"]').click()
        cy.wait(10000)

        cy.get('.fixedTopBox > [style="float:left"]').click()
    })

})

// back button
// cy.get('.fixedTopBox > [style="float:left"]').click()