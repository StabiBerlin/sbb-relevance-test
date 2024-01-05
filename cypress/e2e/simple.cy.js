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

        it('passes via Browser', () => {
            cy.get('#content')
                .contains('Dad')
        })

        // This will be a 403 from world should connect from internal network
        it('passes via http request', () => {
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

        // TODO(DP): get json repsonse from console
        it('passes via http request', () => {
            cy.request({
                url: '/Results',
                qs: {
                    lookfor: 'dad'
                }
            }).then((resp) => {
                expect(resp.status).to.eq(200)
                cy.log(resp)
            })

        })
    })