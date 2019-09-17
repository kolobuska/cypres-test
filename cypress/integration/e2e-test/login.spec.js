describe('Login test', () => {
	before(() => {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.url().should('include', 'index.html')
	})

	it('should display login form', () => {
		cy.get('#signin_button').click()
		cy.get('#login_form').should('be.visible')
	})

	it('should login to application', () => {
		cy.loginToApp('Name', 'Password')
	})

	it('Should display error message', () => {
		cy.get('.alert-error').as('Error_Message')
		cy.get('@Error_Message').should('be.visible')
	})
})
