describe('My first visual regression test', () => {
	before(function() {
		cy.visit('https://example.com')
	})

	it('shouldload homepage', () => {
		cy.url().should('include', 'example.com')
    })
    
    it("should make page snapshot", () => {
        cy.matchImageSnapshot()
    })
})
