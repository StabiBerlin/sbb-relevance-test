describe('Review after reviewed', () => {
    // see #12
    // we should add more language specific searches here
    describe('36 Strategems', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: '36 strategeme harro von senger',
                    type: 'AllFields',
                    limit: '5'
                }
            })
        })

        // affirm existent of primary work title via PP
        it('should be among top 5 hits', () => {
            cy.get('[href*="020460147"]')
                .should('exist')
        })

        // TODO(DP): unskip after yaml changes
        it.skip('first hit should not be a review', () => {
            cy.get('#result0')
                .contains('Strategeme')
                .should('not.contain', 'Rezension')
                .should('not.contain', 'Book Reviews')
        })
    })

    describe('Liberty manik', () => {
        // Note Title search 20 hits, AllFields (23) but allfields already tested above
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'Liberty manik',
                    type: 'Title'
                }
            })
        })

        // TODO(DP): unclear what the top hit should be
        it('should see matching search results', () => {
            cy.get('[href*="1019346698"]')
                .should('exist')
        })

        // TODO(DP): unskip after yaml changes
        it.skip('first hit should not be a review', () => {
            cy.get('#result0')
                .contains('Manik')
                .should('not.contain', 'Rezension')
                .should('not.contain', 'Book Reviews')
        })
    })

})