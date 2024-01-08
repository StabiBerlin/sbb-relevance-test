describe('Parent Work', () => {
    // see #8  
    describe("African American Review", () => {
        // Title search and online access false to limit noise
        // check if exact match first list item is the journal parent and subsequent entries are child works
        // a more elaborate test would compare the value of '.record-number' within the same family
        before(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'African American Review',
                    type: 'Title',
                    "filter[]": '~remote_bool:"false"'
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