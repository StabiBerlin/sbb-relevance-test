describe('Chronology', () => {
    // see #11  
    describe.only('Andreas Gryphius', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'Andreas Gryphius',
                    type: 'Author'
                }
            })
        })

        it('should ... ', () => {
            cy.get('.resultlist')
        })
    })

    describe('oliver heaviside', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'oliver heaviside',
                    type: 'Author'
                }
            })
        })

        it('should ...', () => {
            cy.get('.resultlist')
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

        it('should ...', () => {
            cy.get('.resultlist')
        })
    })

    describe('Lehrbuch Organisationspsychologie', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'Lehrbuch Organisationspsychologie',
                    type: 'allFields'
                }
            })
        })

        it('should ...', () => {
            cy.get('.resultlist')
        })
    })

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

    describe('Kulturgeschichte  deutsches Kaiserreich', () => {
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
})