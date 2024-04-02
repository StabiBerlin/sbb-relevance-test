describe('duplicate entries', () => {
    // wait for grouping?
    // see #45
    describe('Osmanisches Reich im Ersten Weltkrieg', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'Osmanisches Reich im Ersten Weltkrieg',
                    type: 'allFields'
                }
            })
        })

        // once identical items are grouped this test might fail
        it.only('should show three items "T. E. Lawrence…"', () => {
            cy.get('[href*="OLC2136322486"]')
                .should('exist')
            cy.get('[href*="OLC1618743244"]')
                .should('exist')
            cy.get('[href*="info:doi:10.7788%252Fsaeculum.2001.52.1.55"]')
                .should('exist')
        })

        // info:doi:10.7788%252Fsaeculum.2001.52.1.55 Crossref too high
        // OLC2136322486 
        // OLC1618743244
        // see #43
        it.skip('should show all three items in sequence', () => {

            cy.get('[href*="info:doi:10.7788%252Fsaeculum.2001.52.1.55"]')
                .parents('[id^="result"]')
                .find('.record-number')
                .invoke('text')
                .then(($num1) => {
                    const num1 = parseInt($num1)

                    cy.get('[href*="OLC2136322486"]')
                        .parents('[id^="result"]')
                        .find('.record-number')
                        .invoke('text')
                        .then(($num2) => {
                            const num2 = parseInt($num2)

                            cy.get('[href*="OLC1618743244"]')
                                .parents('[id^="result"]')
                                .find('.record-number')
                                .invoke('text')
                                .then(($num3) => {
                                    const num3 = parseInt($num3)

                                    expect(num2).to.eq(num3 - 1)
                                })

                            expect(num1).to.eq(num2 - 1)
                        })
                })
        })

    })

    describe('Todessymbolik', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'Todessymbolik',
                    type: 'allFields',
                    limit: '40'
                }
            })
        })

        // once identical items are grouped this test might fail
        it('should show 4 items "Kollektive und indivi…"', () => {
            cy.get('[href*="1629437654"]')
                .should('exist')
            cy.get('[href*="1562222260"]')
                .should('exist')
            cy.get('[href*="JST104055405"]')
                .should('exist')
            cy.get('[href*="info:doi:10.1163%252F157361290X00024"]')
                .should('exist')
        })

        it.skip('should show all 4 in sequence', () => {

            cy.get('[href*="1629437654"]')
                .parents('[id^="result"]')
                .find('.record-number')
                .invoke('text')
                .then(($num1) => {
                    const num1 = parseInt($num1)

                    cy.get('[href*="1562222260"]')
                        .parents('[id^="result"]')
                        .find('.record-number')
                        .invoke('text')
                        .then(($num2) => {
                            const num2 = parseInt($num2)

                            cy.get('[href*="JST104055405"]')
                                .parents('[id^="result"]')
                                .find('.record-number')
                                .invoke('text')
                                .then(($num3) => {
                                    const num3 = parseInt($num3)

                                    cy.get('[href*="info:doi:10.1163%252F157361290X00024"]')
                                        .parents('[id^="result"]')
                                        .find('.record-number')
                                        .invoke('text')
                                        .then(($num4) => {
                                            const num4 = parseInt($num4)

                                            expect(num3).to.eq(num4 - 1)
                                        })

                                    expect(num2).to.eq(num3 - 1)
                                })

                            expect(num1).to.eq(num2 - 1)
                        })
                })
        })

        it('should show 2 items "Todessymbolik in Komoposi…"', () => {
            cy.get('[href*="742413772"]')
                .should('exist')
            cy.get('[href*="097133701"]')
                .should('exist')
        })

        it('should show both items in sequence', () => {

            cy.get('[href*="742413772"]')
                .parents('[id^="result"]')
                .find('.record-number')
                .invoke('text')
                .then(($num1) => {
                    const num1 = parseInt($num1)

                    cy.get('[href*="097133701"]')
                        .parents('[id^="result"]')
                        .find('.record-number')
                        .invoke('text')
                        .then(($num2) => {
                            const num2 = parseInt($num2)

                            expect(num1).to.eq(num2 - 1)
                        })
                })
        })

        it('should show 2 items "…in der Musik"', () => {
            cy.get('[href*="144358150X"]')
                .should('exist')
            cy.get('[href*="544614259"]')
                .should('exist')
        })

        it('should show both items in sequence', () => {

            cy.get('[href*="144358150X"]')
                .parents('[id^="result"]')
                .find('.record-number')
                .invoke('text')
                .then(($num1) => {
                    const num1 = parseInt($num1)

                    cy.get('[href*="544614259"]')
                        .parents('[id^="result"]')
                        .find('.record-number')
                        .invoke('text')
                        .then(($num2) => {
                            const num2 = parseInt($num2)

                            expect(num1).to.eq(num2 - 1)
                        })
                })
        })
    })

    describe('The Law of nature in the thought of Hugo grotius', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'The Law of nature in the thought of Hugo grotius',
                    type: 'Title'
                }
            })
        })

        it('should find at three matches', () => {
            cy.get('[id*="result"]')
              .should('have.length.gte', 3)
        })
    })

})