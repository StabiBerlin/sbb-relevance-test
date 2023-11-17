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
        cy.get('.result-body')
          .contains('Dad : Roman')  
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

    // TODO(DP): get json repsonse from console
    it.only('passes via http request', () => {
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