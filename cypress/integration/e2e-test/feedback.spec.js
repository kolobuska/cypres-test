describe('Feedback Test', () => {
	before(function() {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.url().should('include', 'index.html')
	})

	it('should display feedback form', () => {
		cy.get('#feedback').as('Link_Feedback')

		cy.get('@Link_Feedback').click()
		cy.get('#feedback-title').should('be.visible')
		cy.get('form').should('be.visible')
	})

	it('should submit feedback form', () => {
		cy.get('#name').as('Input_Name')
		cy.get('#email').as('Input_Email')
		cy.get('#subject').as('Input_Subject')
		cy.get('#comment').as('Input_Comment')
		cy.get('.btn-signin').as('Submit_Button')

		cy.get('@Input_Name').type('Name')
		cy.get('@Input_Email').type('Email')
		cy.get('@Input_Subject').type('Subject')
		cy.get('@Input_Comment').type('Comment')
		cy.get('@Submit_Button').click()
	})

	it('should display sucess message', () => {
		cy.get('#feedback-title').should('be.visible')
	})
})
