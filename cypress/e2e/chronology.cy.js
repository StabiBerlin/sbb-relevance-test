describe('Chronology', () => {
    // see #11  
    describe.skip('Andreas Gryphius', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'Andreas Gryphius',
                    type: 'Author'
                }
            })
        })

        it('should appear before child work', () => {
            cy.get('#result0')
                .find('.media-type')
                .contains(' Zeitschrift (gedruckt) ')
            cy.get('#result1')
                .find('.media-type')
                .contains(' Band einer Zeitschrift/Zeitung ')
        })
    })

    describe.skip('oliver heaviside', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'oliver heaviside',
                    type: 'Author'
                }
            })
        })

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