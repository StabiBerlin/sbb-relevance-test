// Results?lookfor=dad&type=AllFields


describe('simple GUI spec', () => {
    before(() => {
        cy.visit({
            url: '/Results',
            qs: {
                lookfor: 'dad',
                type: 'AllFields'
            }
        })
    })

    it('should see matching search results', () => {
        cy.get('.resultlist')
            .contains('Dad')
    })

    // This will be a 403 from world should connect from internal network
    it('should also pass via http request', () => {
        cy.request({
            url: '/Results',
            qs: {
                lookfor: 'dad'
            }
        }).then((resp) => {
            expect(resp.status).to.eq(200)
        })

    })

    describe('Foreign language phrase search', () => {
        // See #6 
        // Thematische Suche#L30
        it('en all fields query matches en not ar', () => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'Egyptian Language',
                    type: 'AllFields'
                }
            })
            cy.get('.resultlist')
                // PPN JST063665204
                .contains('The Egyptian Language')
            cy.get('.resultlist')
                // PPN DOAJ008736839
                .should('not.contain', 'المعانی الثانیة للأمر فی النص المصری القدیم دراسة بلاغیة مقارنة ')

        })

        it('en subject query matches en and ar', () => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'Egyptian Language',
                    type: 'Subject'
                }
            })
            cy.get('.resultlist')
                // PPN JST063665204
                .contains('The Egyptian Language')
            cy.get('.resultlist')
                // PPN DOAJ008736839
                .contains('المعانی الثانیة للأمر فی النص المصری القدیم دراسة بلاغیة مقارنة ')

        })
    })

    // see #8 
    // Title search and online access false to limit noise
    // check if exact match first list item is the journal parent and subsequent entries are child works
    // a more elaborate test would compare the value of '.record-number' within the same family
    // 
    describe('Parent Work', () => {
        it('should appear before child work', () => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'African American Review',
                    type: 'Title',
                    "filter[]": '~remote_bool:"false"'
                }
            })
            cy.get('#result0')
              .find('.media-type')
              .contains(' Zeitschrift (gedruckt) ')
            cy.get('#result1')
              .find('.media-type')
              .contains(' Band einer Zeitschrift/Zeitung ')

        })
    })
})