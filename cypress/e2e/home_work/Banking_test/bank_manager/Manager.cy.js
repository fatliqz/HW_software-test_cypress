
describe('example Manager', () => {

    beforeEach(() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    })

    it.only('TC-01 Add Cumtomer + open Account', () => {
        cy.get(':nth-child(3) > .btn').click()

        cy.addCustomer('Potiwat', 'khunArr', '62210')

        // cy.get('[ng-class="btnClass1"]').click()

        // cy.get(':nth-child(1) > .form-control').type('potiwat')

        // cy.get(':nth-child(2) > .form-control').type('Arr')
        // cy.get(':nth-child(3) > .form-control').type('61120')
        // cy.wait(3000)
        // cy.get('form.ng-dirty > .btn').click()
        cy.wait(3000)


        // open Account
        cy.get('[ng-class="btnClass2"]').click()
        cy.get('#userSelect').select('Potiwat khunArr')
        cy.get('#currency').select('Dollar')
        cy.wait(5000)
        cy.get('form.ng-dirty > button').click()
        cy.wait(3000)

        // ดูข้อมูล
        cy.get('[ng-class="btnClass3"]').click()
        cy.wait(3000)
        cy.get('.form-control').type('Potiwat')
        // cy.wait(5000)




    })

    it('TC-02 หา customer + Delete', () => {

        cy.get(':nth-child(3) > .btn').click()

        cy.get('[ng-class="btnClass3"]').click()
        cy.wait(3000)
        cy.get('.form-control').type('Ron')

        cy.get(':nth-child(5) > button').click()

    })

})

// back button
// cy.get('.fixedTopBox > [style="float:left"]').click()