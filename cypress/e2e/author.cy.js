describe('Author Search', () => {
    // see #14  
    describe.only('glaser karin' , () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'glaser karin',
                    type: 'Author'
                }
            })
        })

        // Bei Author-Suche Autorenfeld boosten (gegenüber anderen Feldern, auch Titel)
        it('should appear before child work', () => {
            cy.get('#result0')
                .find('.media-type')
                .contains(' Zeitschrift (gedruckt) ')
            cy.get('#result1')
                .find('.media-type')
                .contains(' Band einer Zeitschrift/Zeitung ')
        })
    })

    describe('阎连科', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: '阎连科',
                    type: 'allFields'
                }
            })
        })

        // (DP): 3 hits no child works as far as I can see
        // PPN: 168000709
        it('first hit should be parent work', () => {
            cy.get('[href*="168000709"]')
                .should('exist')
        })
    })

    describe('"Corte, Justine del"', () => {
        // (DP): parent work not in top 20
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: '"Corte, Justine del"',
                    type: 'allFields'
                }
            })
        })

        // TODO(DP): failing
        // PPN: 521689139
        it('first hit should be parent work', () => {
            cy.get('#result0')
              .find('[href*="521689139"]')
              .should('exist')
        })

        // TODO(DP): failing
        it('first hit should not be child volume', () => {
            cy.get('#result0')
              .find('.media-type')
              .should('not.contain', 'Band einer Zeitschrift/Zeitung')
              .and('not.contain', 'Serial Volume')
        })
    })

    describe('Andreas Gryphius' , () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'Andreas Gryphius',
                    type: 'Author'
                }
            })
        })

        // Bei Author-Suche Autorenfeld boosten (gegenüber anderen Feldern, auch Titel)
        it('should appear before child work', () => {
            cy.get('#result0')
                .find('.media-type')
                .contains(' Zeitschrift (gedruckt) ')
            cy.get('#result1')
                .find('.media-type')
                .contains(' Band einer Zeitschrift/Zeitung ')
        })
    })

    describe('oliver heaviside' , () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'oliver heaviside',
                    type: 'Author'
                }
            })
        })

        // Bei Author-Suche Autorenfeld boosten (gegenüber anderen Feldern, auch Titel)
        it('should appear before child work', () => {
            cy.get('#result0')
                .find('.media-type')
                .contains(' Zeitschrift (gedruckt) ')
            cy.get('#result1')
                .find('.media-type')
                .contains(' Band einer Zeitschrift/Zeitung ')
        })
    })
})