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
        it('Top 1 should be published after 2020', () => {
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
        it('Later editions should be ranked higher', () => {
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

        it('should ...', () => {
            cy.get('.resultlist')
        })
    })

    // Sorting by date decreases relevance 
    // 608 hits total but many do not contain the search terms in the title 
    // or are about later periods all together
    // why is 130141674 shown ?
    // see #39
    describe('Kulturgeschichte deutsches Kaiserreich', () => {
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

        // PPN 1612978711
        // PPN JST069657696
        // see #35
        it('should not match irrelevant titles', () => {
            cy.get('[href*="1612978711"]')
                .should('not.exist')
            cy.get('[href*="JST069657696"]')
                .should('not.exist')
        })

        it('should not contain Caralli in Title', () => {
            cy.get('.resultlist')
                .should(`not.contain`, `Caralli`)
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

        // see #40
        it('should contain both primary and secondary literature', () => {
            cy.get('[href*="272952737"]')
                .should('exist')
            cy.get('[href*="1507865600"]')
                .should('exist')
            cy.get('[href*="1016493053"]')
                .should('exist')

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

        //  1756833699
        // not sure if this should or should not exist
        // see #35
        // see #22
        it('should show relevant titles in translation', () => {
            cy.get('[href*="1756833699"]')
                .should('exist')
        })

        // PPN 389602841 2005
        // PPN 430480865 1969
        // see #35
        it('should show relevant titles in translation', () => {
            cy.get('[href*="389602841"]')
                .parents('[id^="result"]')
                .find('.record-number')
                .invoke('text')
                .then(($num1) => {
                    const num1 = parseInt($num1)

                    cy.get('[href*="430480865"]')
                        .parents('[id^="result"]')
                        .find('.record-number')
                        .invoke('text')
                        .then(($num2) => {
                            const num2 = parseInt($num2)

                            expect(num1).to.be.lessThan(num2)
                        })
                })
        })
    })

    describe('koptische Stoffe', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'koptische Stoffe',
                    type: 'allFields'
                }
            })
        })

        // TOP 4 hits identical Title but not duplicate
        // unclear why chronology not the effective sorting criteria
        // but not necessarily a problem
        // PPN 447104306 (1966)
        // PPN 1117375048 (1967)
        // PPN 1083642081 (1986)
        // PPN 403203899 (1959)
        it('should rank identical titles according to chronology', () => {
            cy.get('[href*="1083642081"]')
                .parents('[id^="result"]')
                .find('.record-number')
                .invoke('text')
                .then(($num1) => {
                    const num1 = parseInt($num1)

                    cy.get('[href*="1117375048"]')
                        .parents('[id^="result"]')
                        .find('.record-number')
                        .invoke('text')
                        .then(($num2) => {
                            const num2 = parseInt($num2)

                            cy.get('[href*="447104306"]')
                                .parents('[id^="result"]')
                                .find('.record-number')
                                .invoke('text')
                                .then(($num3) => {
                                    const num3 = parseInt($num3)

                                    cy.get('[href*="403203899"]')
                                        .parents('[id^="result"]')
                                        .find('.record-number')
                                        .invoke('text')
                                        .then(($num4) => {
                                            const num4 = parseInt($num4)

                                            expect(num3).to.be.lessThan(num4)
                                        })

                                    expect(num2).to.be.lessThan(num3)
                                })

                            expect(num1).to.be.lessThan(num2)
                        })
                })
        })
    })

    describe('Sadeleer, Environmental principles. From political slogans to legal rules', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'Sadeleer, Environmental principles. From political slogans to legal rules',
                    type: 'allFields'
                }
            })
        })

        // mix of reviews and different media types
        // see #23
        // old behaviour no longer reproducible, 
        // TOP1 is book (newest) followed by ebook 9same date) and earlier article with identical title
        // 2020 book PPN 1740404548
        // 2004 article PPN OLC1736991698
        it('newer book shuold be before older article', () => {
            cy.get('[href*="1740404548"]')
                .parents('[id^="result"]')
                .find('.record-number')
                .invoke('text')
                .then(($num1) => {
                    const num1 = parseInt($num1)

                    cy.get('[href*="OLC1736991698"]')
                        .parents('[id^="result"]')
                        .find('.record-number')
                        .invoke('text')
                        .then(($num2) => {
                            const num2 = parseInt($num2)
                            expect(num1).to.be.lessThan(num2)
                        })
                })
        })
    })

})