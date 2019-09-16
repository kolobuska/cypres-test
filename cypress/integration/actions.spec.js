describe('Action test', () => {
	beforeEach(function() {
		cy.visit('https://devexpress.github.io/testcafe/example/')
	})

	it('Submit developer name', () => {
		cy.submitDeveloper('First Last')
		cy.get('.result-content').should('be.visible')
		cy.url().should('include', 'thank-you')
	})

	it('Should enable slider', () => {
		cy.get('#slider').as('Slider')

		cy.get('@Slider').should('have.class', 'ui-state-disabled')
		cy.get('#tried-test-cafe').click()
		cy.get('@Slider').should('not.have.class', 'ui-state-disabled')
	})

	it('Should have empty value by default', () => {
		cy.get('#comments').as('Textarea')

		cy.get('#tried-test-cafe').click()
		cy.get('@Textarea').should('have.value', '')
		cy.get('@Textarea').type('New value')
		cy.get('@Textarea').should('have.value', 'New value')
	})
})
