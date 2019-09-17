describe('Search bpx test', () => {
	before(() => {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.url().should('include', 'index.html')
	})

	it('should search for value via searchbox', () => {
		cy.get('#searchTerm').as('Searchbox')
		cy.get('@Searchbox').type('bank {enter}')

		cy.url().should('include', 'search.html?searchTerm=bank')
	})

	it('should display results search results page', () => {
		cy.get('h2').as('Title')
		cy.get('@Title').contains('Search Results')
	})

	it('should display home page again', () => {
		cy.go('back')
		cy.url().should('include', 'index.html')
	})
})
