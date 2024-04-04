describe('Topical Search', () => {
    // see #37 
   

    // see above unclear success criteria
    describe('othering', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'othering',
                    type: 'allFields',
                    limit: 5
                }
            })
        })

        it('TOP5 should contain topic in title', () => {
            cy.get('.resultlist')
                .contains('othering', { matchCase: false })
        })
    })
 

  describe('Review after reviewed', () => {
    // see #12
    // we should add more language specific searches here
    describe('36 Strategems', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: '36 strategeme harro von senger',
                    type: 'AllFields',
                    limit: '10'
                }
            })
        })

        // affirm existent of primary work title via PP
        // 3rd edition 274397412 (ranking2)
        // 4th edtion 020460147 (stabikat)
        it('should be among top 10 hits', () => {
            cy.get('[href*="020460147"]')
                .should('exist')
        })

        // see #26
        it.skip('first hit should not be a review', () => {
            cy.get('#result0')
                .contains('Strategeme')
                .should('not.contain', 'Rezension')
                .should('not.contain', 'Book Reviews')
        })
    })
	
	 describe('Die Organisierte Welt Internationale Beziehungen und Organisationsforschung', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'Die Organisierte Welt Internationale Beziehungen und Organisationsforschung',
                    type: 'AllFields'
                }
            })
        })

        // PPN 608988723
        it('first hit matches Title', () => {
            cy.get('#result0')
                .find('[href*="608988723"]')
                .should('exist')
        })

        it('second hit should be a review', () => {
            cy.get('#result1')
                .contains('Rezension')
        })
    })
	
	 describe('Young, Iris Marion (2002): Inclusion and Democracy. Oxford: Oxford University Press', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'Young, Iris Marion (2002): Inclusion and Democracy. Oxford: Oxford University Press',
                    type: 'AllFields', 
                    limit: '10'
                }
            })
        })

        
        // crash on ranking2
        it('second hit should be a review', () => {
            cy.get('#result1')
                .should('exist')
                .contains('Review')
        })
    })
	
describe('Publishing Place', () => {
    // see #15 
	
	describe('geschichte berlin', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'geschichte berlin',
                    type: 'allFields'
                }
            })
        })

        // Results are good 
        // RegEx check for relevant titles is a bit on the flaky side
        // see second test below 
        it('TOP 20 should have topical titles', () => {
            cy.get('.resultlist')
              .each(($el, index, $lis) => {
                cy.wrap($el)
                  .contains(/^(?=.*Berlin)(?=.*Geschichte)|Kalend.*|Chron.*$/)
              })
              .then(($lis) => {
                cy.wrap($lis)
                  .should('have.length', '20')
              })
        })

        // This assumes that the most relevant result will have the matching baisc classification
        // Iterating over the list to determin relevance based on detail view increase flakyness, decreases performance,
        // and doesn't significantly improving test accuracy
        it('TOP hit should have matching BK', () => {
            cy.get('.resultlist')
              .first()
              .click()
            cy.get('[href*="BKL"]')
              .contains('15.46')
        })
    })
	
describe('Nested Work', () => {
    // see #8  
	
	describe('Journal of Comparative Law 2021', () => {
        // (DP): parent work not in top 20
        // need to boost parent work 
        // see #66
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'Journal of Comparative Law 2021',
                    type: 'allFields'
                }
            })
        })

  
        // PPN: 1755480725
        it('first hit should be 2021 child work based on search term', () => {
            cy.get('#result0')
              .find('[href*="1755480725"]')
              .should('exist')
        })

        

        // This asssumes de default view
        it('first hit should be child volume based on search term', () => {
            cy.get('#result0')
              .find('.media-type')
              .should('contain', 'Band einer Zeitschrift/Zeitung')
              .and('not.contain', 'Serial Volume')
        })
    })
	
describe('Foreign language phrase search', () => {
    // See #6
    // see 31 
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
    })

  
     describe('popular science soviet', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'popular science soviet',
                    type: 'allFields'
                }
            })
        })

        it('Top 1 should contain search terms in title', () => {
            cy.get('.resultlist')
              .first()
              .contains(/(?=.*Soviet.*)(?=.*Science)(?=.*Popular.*)/i)
        })

        it('Top 2 should contain search terms in details > subject', () => {
            cy.get('#result1')
              .find('.resultlist')      
              .click()
            cy.get('.col-sm-8')
              .contains(/(?=.*Soviet.*)(?=.*Science)(?=.*Popular.*)/i)
    

  
              })
        })
    })
    
    // exact match no longer in TOP 20 what is happening here?
    describe('门禁社区边界和家的构建关系研究', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: '门禁社区边界和家的构建关系研究',
                    type: 'allFields',
                    limit: '1'
                }
            })
        })

        // 16.01.24 Title no longer in TOP 20
        // PPN CAJ435467670
        // see #27
        // see Boundary and the Making of Home above
        it('should find matching article as first hit', () => {
            cy.get('[href*="CAJ435467670"]')
                .should('exist')
        })
    })
	
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

        it('contains "T. E. Lawrence…" via filter', () => {
            cy.get('.resultlist')
              .contains('Friedensschluss')
            cy.get('#side-panel-format > .title')
            cy.get('[data-title="Aufsatz (online)"]')
              .click()
            cy.get('[href*="info:doi:10.7788%252Fsaeculum.2001.52.1.55"]')
                .should('exist')
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
   

describe('Chronology', () => {
    // see #11 
	
	 describe('jugendliteratur mittelalter roman', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'jugendliteratur mittelalter roman',
                    type: 'allFields',
                    limit: '40'
                }
            })
        })

        // see #40
        // see #45 two titles are identical (print 613754344 and e-book 1016493053)
        // 1st hit published 1985, 2nd 2002, 3rd 2011
        // definition of relevance?
        it('should show these items', () => {
            cy.get('[data-id="272952737"]')
                .should('exist')
            cy.get('[data-id="1507865600"]')
                .should('exist')
            cy.get('[data-id="1016493053"]')
                .should('exist')
        })
   })
   
   
})