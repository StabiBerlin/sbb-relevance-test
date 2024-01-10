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

        // see #26
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

        // TODO(DP): failing
        it('first hit should not be a review', () => {
            cy.get('#result0')
                .contains('Manik')
                .should('not.contain', 'Rezension')
                .should('not.contain', 'Book Reviews')
        })
    })

    describe('Die Organisierte Welt Internationale Beziehungen und Organisationsforschung', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'Die Organisierte Welt Internationale Beziehungen und Organisationsforschung',
                    type: 'AllFields'
                }
            })
        })

        // PPN 608988723
        it('first hit matches Title', () => {
            cy.get('#result0')
                .find('[href*="608988723"]')
                .should('exist')
        })

        it('second hit should be a review', () => {
            cy.get('#result1')
                .contains('Rezension')
        })
    })

    describe('Young, Iris Marion (2002): Inclusion and Democracy. Oxford: Oxford University Press', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'Young, Iris Marion (2002): Inclusion and Democracy. Oxford: Oxford University Press',
                    type: 'AllFields', 
                    limit: '10'
                }
            })
        })

        // PPN 315776242
        // see #26
        it.skip('first hit matches exact title', () => {
            cy.get('#result0')
                .find('[href*="315776242"]')
                .should('exist')
        })

        it('second hit should be a review', () => {
            cy.get('#result1')
                .should('exist')
                .contains('Review')
        })
    })

})