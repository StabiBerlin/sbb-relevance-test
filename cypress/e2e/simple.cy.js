// test different connection options, sort of a self-test

describe.skip('connection to GUI result list', () => {
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
    it('connect to vufind result object', () => {
        cy.request({
            url: '/Results',
            qs: {
                lookfor: 'dad'
            }
        }).then((resp) => {
            expect(resp.status).to.eq(200)
        })

    })

    it('connects to index', () => {
        cy.request({
            url: 'https://findex.gbv.de/index/11/select',
            qs: {
                q: 'dad'
            }
        }).then((resp) => {
            expect(resp.status).to.eq(200)
        })
       
    })
})