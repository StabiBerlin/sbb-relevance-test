describe('Chronology', () => {
    // see #11  
    describe('Andreas Gryphius', () => {
        // DP: add sort: 'year' to qs for sorted results
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'Andreas Gryphius',
                    type: 'allFields'
                }
            })
        })

        // Items without a year in resultlist-data exist but quite rare 
        // DP: sometimes the date in resultlist-data conflicts with the exact date in details view
        // which can impact the percieved sorting
        // see #35
        it.skip('Top 1 should be published after 2020', () => {
            cy.get('.resultlist-data')
                .first()
                .contains(/202\d/)
        })
    })

    describe('Klaus Hurrelmann, Gudrun Quenzel: Lebensphase Jugend', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'Klaus Hurrelmann, Gudrun Quenzel: Lebensphase Jugend',
                    type: 'allFields'
                }
            })
        })

        // 2022 ed. PPN 1739067762
        // 2012 ed. PPN 682815853
        it('Latest edition should be before earlier edition', () => {
            // pick 2022 edition
            cy.get('[href*="1739067762"]')
                // select ranking number from hit list 
                .parents('[id^="result"]')
                .find('.record-number')
                .invoke('text')
                .then(($num1) => {
                    // turn into integer
                    const num1 = parseInt($num1)

                    // repeat for 2012 edition
                    cy.get('[href*="682815853"]')
                        .parents('[id^="result"]')
                        .find('.record-number')
                        .invoke('text')
                        .then(($num2) => {
                            const num2 = parseInt($num2)
                            // make sure 1 < 2
                            expect(num1).to.be.lessThan(num2)
                        })
                })
        })
    })

    describe('Lehrbuch Organisationspsychologie', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'Lehrbuch Organisationspsychologie',
                    type: 'Title'
                }
            })
        })
        // 2007 ed PPN 537598197
        // 1995 ed PPN 182859061
        // 2004 ed PPN 366403265
        // see #35
        it.skip('Later editions should be ranked higher', () => {
            cy.get('[href*="537598197"]')
                .parents('[id^="result"]')
                .find('.record-number')
                .invoke('text')
                .then(($num1) => {
                    const num1 = parseInt($num1)

                    cy.get('[href*="366403265"]')
                        .parents('[id^="result"]')
                        .find('.record-number')
                        .invoke('text')
                        .then(($num2) => {
                            const num2 = parseInt($num2)

                            cy.get('[href*="182859061"]')
                                .parents('[id^="result"]')
                                .find('.record-number')
                                .invoke('text')
                                .then(($num3) => {
                                    const num3 = parseInt($num3)

                                    expect(num2).to.be.lessThan(num3)
                                })

                            expect(num1).to.be.lessThan(num2)
                        })
                })
        })
    })

    // see #36
    describe('emanzipation juden', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'emanzipation juden',
                    type: 'allFields'
                }
            })
        })

        it.skip('should ...', () => {
            cy.get('.resultlist')
        })
    })

    // Sorting by date decreases relevance 
    // 608 hits total but many do not contain the search terms in the title 
    // or are about later periods all together
    // why is 130141674 shown ?
    // 
    describe.only('Kulturgeschichte deutsches Kaiserreich', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'Kulturgeschichte  deutsches Kaiserreich',
                    type: 'allFields'
                }
            })
        })

        it('should ...', () => {
            cy.get('.resultlist')
        })
    })

    describe('Caral America', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'Caral America',
                    type: 'allFields'
                }
            })
        })

        it('should ...', () => {
            cy.get('.resultlist')
        })
    })

    describe('jugendliteratur mittelalter roman', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'jugendliteratur mittelalter roman',
                    type: 'allFields'
                }
            })
        })

        it('should ...', () => {
            cy.get('.resultlist')
        })
    })

    describe('Griechische Mythologie', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'Griechische Mythologie',
                    type: 'allFields'
                }
            })
        })

        it('should ...', () => {
            cy.get('.resultlist')
        })
    })
})