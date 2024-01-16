describe('Topical Search', () => {
    // see #37 
    describe('Narratologie', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'Narratologie',
                    type: 'allFields'
                }
            })
        })

        // too many articles
        it('should ...', () => {
            cy.get('.resultlist')
        })
    })

    describe('soziale arbeit theorie', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'soziale arbeit theorie',
                    type: 'allFields'
                }
            })
        })

        // too many articles
        it('should ...', () => {
            cy.get('.resultlist')
        })
    })

    describe('social media analytics', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'social media analytics',
                    type: 'allFields'
                }
            })
        })

        // too many articles
        it('should ...', () => {
            cy.get('.resultlist')
        })
    })

    describe('othering', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'othering',
                    type: 'allFields'
                }
            })
        })

        it('should ...', () => {
            cy.get('.resultlist')
        })
    })

    describe('japan popular culture anime', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'japan popular culture anime',
                    type: 'Subject'
                }
            })
        })

        it('should ...', () => {
            cy.get('.resultlist')
        })
    })

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

        it('should ...', () => {
            cy.get('.resultlist')
        })
    })
    describe('esperanto ddr', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'esperanto ddr',
                    type: 'allFields'
                }
            })
        })

        it('should ...', () => {
            cy.get('.resultlist')
        })
    })
    describe('KI gesichtserkennung', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'KI gesichtserkennung',
                    type: 'allFields'
                }
            })
        })

        it('should ...', () => {
            cy.get('.resultlist')
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

        it('should ...', () => {
            cy.get('.resultlist')
        })
    })

    describe('Todessymbolik', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'Todessymbolik',
                    type: 'allFields'
                }
            })
        })

        it('should ...', () => {
            cy.get('.resultlist')
        })
    })

    describe('affektive störung', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'affektive störung',
                    type: 'allFields'
                }
            })
        })

        it('should ...', () => {
            cy.get('.resultlist')
        })
    })

    describe('Ensemblespiel und Klassenmusizieren', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'Ensemblespiel und Klassenmusizieren',
                    type: 'allFields'
                }
            })
        })

        it('should ...', () => {
            cy.get('.resultlist')
        })
    })

    describe('The Law of nature in the thought of Hugo grotius', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'The Law of nature in the thought of Hugo grotius',
                    type: 'allFields'
                }
            })
        })

        it('should ...', () => {
            cy.get('.resultlist')
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

        // too many articles? 
        it('should ...', () => {
            cy.get('.resultlist')
        })
    })

    describe('Selam Berlin Yade Kara', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'Selam Berlin Yade Kara',
                    type: 'allFields'
                }
            })
        })
        it('should ...', () => {
            cy.get('.resultlist')
        })
    })
})