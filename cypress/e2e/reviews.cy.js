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
                    limit: '10'
                }
            })
        })

        // affirm existent of primary work title via PP
        // 3rd edition 274397412 (ranking2)
        // 4th edtion 020460147 (stabikat)
        it('should be among top 10 hits', () => {
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

        // crash on ranking2
        it('second hit should be a review', () => {
            cy.get('#result1')
                .should('exist')
                .contains('Review')
        })
    })

    describe('Selam Berlin Yade Kara', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'Selam Berlin Yade Kara',
                    type: 'allFields'
                }
            })
        })
        // this beginns to conflict with chronology requirement
        // see #26
        it.skip('TOP1 should be the novel (primary work)', () => {
            cy.get('#result0')
              .find('.save-record')
              .invoke('attr', 'data-id')
              .should('equal','364739789')
        })
    })


   describe('Sadeleer, Environmental principles. From political slogans to legal rules', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'Sadeleer, Environmental principles. From political slogans to legal rules',
                    type: 'allFields'
                }
            })
        })

        // mix of reviews and different media types monograph
        // see #23
        // old behaviour no longer reproducible, 
        // 2020 book PPN 1740404548
        // 2004 review PPN OLC1736991698
        it('primary book should be before reviews', () => {
            cy.get('[href*="1740404548"]')
                .parents('[id^="result"]')
                .find('.record-number')
                .invoke('text')
                .then(($num1) => {
                    const num1 = parseInt($num1)

                    cy.get('[href*="OLC1736991698"]')
                        .parents('[id^="result"]')
                        .find('.record-number')
                        .invoke('text')
                        .then(($num2) => {
                            const num2 = parseInt($num2)
                            expect(num1).to.be.lessThan(num2)
                        })
                })
        })
    })
	
	 describe('Mäser, Rolf (2000): Bach und die drei Temporätsel. Bern: Peter Lang', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'mäser Bach und die drei Temporätsel',
                    type: 'allFields', 
                    limit: '10'
                }
            })
        })

        // PPN 161359545X
               it.only('primary book should be before reviews', () => {
            cy.get('#result0')
              .find('.save-record')
              .invoke('attr', 'data-id')
              .should('equal','')
				
               			
			  })

    })
})