const YAML = require('yamljs')


describe.skip('known item searches', () => {
  // If using Testserver visit page
  // before(() => {
  //     cy.readFile('vufind/searchspecs.yaml').then((str) => {
  // parse the string into object literal
  // const searchspec = YAML.parse(str)
  // })

  it('Newer should be higher', () => {
    cy.visit('/', {
      qs: {
        q: 'Klaus Hurrelmann, Gudrun Quenzel: Lebensphase Jugend'
      },
    })
  })

  it('Newer should be higher', () => {
    cy.visit('/', {
      qs: {
        q: 'Lehrbuch Organisationspsychologie'
      },
    })
  })

  // it('Parent before child', () => {
  //   cy.visit('/', {
  //     qs: {
  //       q: 'African American Review'
  //     },
  //   })
  // })

  it('child should be first when child is searched', () => {
    cy.visit('/', {
      qs: {
        q: 'Journal of Comparative Law 2021'
      },
    })
  })

  it('Newest is first', () => {
    cy.visit('/', {
      qs: {
        q: 'Alois Hahn Konstruktionen des Selbst'
      },
    })
  })

  it('primary before secondar work', () => {
    cy.visit('/', {
      qs: {
        q: 'Die Organisierte Welt Internationale Beziehungen und Organisationsforschung'
      },
    })
  })

  it('primary before secondar work', () => {
    cy.visit('/', {
      qs: {
        q: 'Young, Iris Marion (2002): Inclusion and Democracy. Oxford: Oxford University Press'
      },
    })
  })
  it('dupes', () => {
    cy.visit('/', {
      qs: {
        q: 'The Law of nature in the thought of Hugo grotius'
      },
    })
  })
  it('exactness (mm)', () => {
    cy.visit('/', {
      qs: {
        q: 'Boundary and the Making of Home'
      },
    })
  })

  it('author all fields', () => {
    cy.visit('/', {
      qs: {
        q: 'glaser karin'
      },
    })
  })
  it('primary before secondar work', () => {
    cy.visit('/', {
      qs: {
        q: '36 strategeme harro von senger'
      },
    })
  })
  it('linguistic context cjk', () => {
    cy.visit('/', {
      qs: {
        q: '阎连科'
      },
    })
  })
  it('passes', () => {
    cy.visit('/', {
      qs: {
        q: 'Samuel Scheidt'
      },
    })
  })
  it('passes', () => {
    cy.visit('/', {
      qs: {
        q: 'Karte von Tschili und Schantung'
      },
    })
  })
  it('primary before secondar work', () => {
    cy.visit('/', {
      qs: {
        q: 'Liberty manik'
      },
    })
  })
  it('Pro Print', () => {
    cy.visit('/', {
      qs: {
        q: 'Sadeleer, Environmental principles. From political slogans to legal rules'
      },
    })
  })
  it('passes', () => {
    cy.visit('/', {
      qs: {
        q: 'Selam Berlin Yade Kara'
      },
    })
  })
  it('strict search', () => {
    cy.visit('/', {
      qs: {
        q: '"Corte, Justine del"'
      },
    })
  })
  it('parent before child', () => {
    cy.visit('/', {
      qs: {
        q: 'Allg. polit. Nachrichten Organ Bergbau Hüttenbetrieb 1858-'
      },
    })
  })
  it('passes', () => {
    cy.visit('/', {
      qs: {
        q: 'Die Organisierte Welt Internationale Beziehungen und Organisationsforschung'
      },
    })
  })
  it('data poverty', () => {
    cy.visit('/', {
      qs: {
        q: 'Eight International Congress of Refrigeration'
      },
    })
  })
})