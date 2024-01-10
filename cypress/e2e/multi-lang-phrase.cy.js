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

    // see #27
    it.skip('en subject query matches en and ar', () => {
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