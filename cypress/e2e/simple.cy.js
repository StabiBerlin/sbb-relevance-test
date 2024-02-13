// test different connection options
// unskip for local debugging

describe.skip('connecting to ', () => {
    describe('Stabikat', () => {
        beforeEach(() => {
            cy.visit({
                url: 'https://stabikat.de/search/Results',
                qs: {
                    lookfor: 'dad',
                    type: 'AllFields'
                }
            })
        })

        // requires https-proxy and no-proxy to work
        it('should see results in GUI', () => {
            cy.get('.resultlist')
                .contains('Dad')
        })
    })

    describe('vufind 6', () => {
        // This requires http proxy and should only work from internal network
        it('should GET results via request', () => {
            cy.request({
                url: 'http://b-dev20220203-vufind-6/Search/Results',
                qs: {
                    lookfor: 'dad'
                }
            }).then((resp) => {
                expect(resp.status).to.eq(200)
            })
        })

        // Solr-Query is only logged to console on test servers
        it('sees SOLR-Query', () => {

            cy.visit({
                url: 'http://b-dev20220203-vufind-6/Search/Results',
                qs: {
                    lookfor: 'dad',
                    type: 'AllFields'
                },
                onBeforeLoad(win) {
                    cy.spy(win.console, 'log').as('consoleLog')
                }
            })

            cy.get('@consoleLog')
              .should('be.called')

        })
    })

    describe('Findex', () => {
        // this should only work from internal network

        it('should see 9k hits or more', () => {
            const results = 
            cy.request({
                url: 'https://findex.gbv.de/index/11/select',
                qs: {
                    q: 'dad'
                }
            })
              .its('body.response.numFound')
              .should('be.at.least', 9000)
        })
    })
})