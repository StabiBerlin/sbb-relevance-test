describe('Publishing Place', () => {
    // see #15  
    describe.only('soziale frauenschule berlin', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'soziale frauenschule berlin',
                    type: 'allFields'
                }
            })
        })

        it('should appear before child work', () => {
            cy.get('.resultlist')
        })
    })

    // see multi-lang-phrase
    describe('geschichte berlin', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'geschichte berlin',
                    type: 'allFields'
                }
            })
        })

        it('should appear before child work', () => {
            cy.get('.resultlist')
        })
    })
})