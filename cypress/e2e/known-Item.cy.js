describe('known item searches', () => {
  // see #7
  // see https://forum.sbb.spk-berlin.de/t/warum-erscheinen-diese-treffer-fur-meine-anfrage/5599
  
  describe('Metzler-Lexikon Theatertheorie', () => {
    beforeEach(() => {
        cy.visit({
            url: '/Results',
            qs: {
                lookfor: 'Metzler-Lexikon Theatertheorie',
                type: 'allFields'
            }
        })
    })

    // I don't understand the reasoning behind the requirement
    it('should find exactly two matches', () => {
        cy.get('[id*="result"]')
          .should('have.length', 2)
    })

    // this passes in production
    it('TOP1 should be the known item', () => {
        cy.get('#result0')
          .contains('Metzler-Lexikon Theatertheorie')
    })
})
})