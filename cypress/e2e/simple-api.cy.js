describe('simple api spec', () => {
    // Broken spec, findex rejects direct requests with 403 even from internatl network
    
    // before(() => {
    //     cy.visit('select', {
    //         headers: {
    //             'accept': 'application/json, text/plain, */*'
    //         },
    //         qs: {
    //             q: 'dad'
    //         }
    //     })
    // })


    it.skip('connects via URL', () => {
        cy.visit('select?q=collection%3AFID')
    })

    // This will be a 403 for world should connect from internal network
    // https://findex.gbv.de/index/11/select?q=collection%3AFID
    it('connects via http request', () => {
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

