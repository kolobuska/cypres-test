describe('Action test', () => {
	beforeEach(function() {
		cy.visit('https://devexpress.github.io/testcafe/example/')
	})

	it('Submit developer name', () => {
		cy.get('#developer-name').type('First Last')
		cy.get('#submit-button').scrollIntoView()
		cy.get('#submit-button').click()

		cy.get('.result-content').should('be.visible')
		cy.url().should('include', 'thank-you')
	})

	it('Should enable slider', () => {
		cy.get('#slider').as('Slider')

		cy.get('@Slider').should('have.class', 'ui-state-disabled')
		cy.get('#tried-test-cafe').click()
		cy.get('@Slider').should('not.have.class', 'ui-state-disabled')
	})
})
