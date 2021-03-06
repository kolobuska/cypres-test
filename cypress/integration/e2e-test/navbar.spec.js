describe('Navbar test', () => {
	before(() => {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.url().should('include', 'index.html')
	})

	it('should display online banking content', () => {
		cy.get('#onlineBankingMenu').as('Link_OnlineBanking')

		cy.get('@Link_OnlineBanking').click()

		cy.get('h1').as('Title')
		cy.get('@Title').contains('Online Banking')

		cy.get('#online_banking_features').should('be.visible')
	})

	it('should display feedback content', () => {
		cy.get('#feedback').as('Link_Feedback')

		cy.get('@Link_Feedback').click()
		cy.get('#feedback-title').should('be.visible')
	})

	it('should navigate to homepage on logo', () => {
		cy.get('.brand').as('Logo')

		cy.get('@Logo').click()
		cy.url().should('include', 'index.html')
	})
})
