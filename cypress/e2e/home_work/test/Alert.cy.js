describe('example Alert', () => {

    beforeEach(() => {
        cy.visit('https://letcode.in/alert')
    })



    it('TC-01', () => {
        cy.get(':nth-child(1) > .control').click()
        cy.wait(5000)
    })

})

// back button
// cy.get('.fixedTopBox > [style="float:left"]').click()