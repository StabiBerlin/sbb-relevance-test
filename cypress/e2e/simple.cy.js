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
})