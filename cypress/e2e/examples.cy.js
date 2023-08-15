describe('Various Examples', () => {
  beforeEach(() => {
    cy.visit('/examples')
  })
  it('multi-page testing', () => {
    cy.getDataTest('nav-why-crypress').click()
    cy.location("pathname").should("equal", "/")

    cy.getDataTest('nav-overview').click()
    cy.location("pathname").should("equal", "/overview")

    cy.getDataTest('nav-fundamentals').click()
    cy.location("pathname").should("equal", "/fundamentals")
  })

  it('intercepts ', () => {
    cy.intercept('POST', 'http://localhost:3000/examples', {
      // body: {
      //   message:'successfully intercept request'
      // }
      fixture: 'example.json'
    })
    cy.getDataTest('post-submit').click()
  })

  it.only('grudges', () => {
    // cy.pause()
    cy.contains(/Add Some Grudges/i)
    cy.getDataTest('grudge-list').within(() => {
      cy.get('li').should('have.length', 0)
    })
    
    cy.getDataTest('grudge-clear-button').should('not.exist')
    cy.getDataTest('grudge-title').should('have.text', 'Add Some Grudges')

    cy.getDataTest('grudge-input').within(() => {
      cy.get('input').type('new task')
    })

    cy.getDataTest('grudge-button').click()

    cy.getDataTest('grudge-title').should('have.text', 'Grudges')
    cy.getDataTest('grudge-list').within(() => {
      cy.get('li').should('have.length', 1)
    })

    cy.getDataTest('grudge-input').within(() => {
      cy.get('input').type('2 task')
    })
    cy.getDataTest('grudge-button').click()

    cy.getDataTest('grudge-list').within(() => {
      cy.get('li').should('have.length', 2)
      cy.get('li').its(0).should('contains.text', 'new task')
    })

    cy.getDataTest('grudge-list').within(() => {
      cy.get('li').its(0).within(() => {
        cy.get('button').click()
      })
    })
    cy.getDataTest('grudge-list').within(() => {
      cy.get('li').should('have.length', 1)
    })
    
    cy.getDataTest('grudge-clear-button').click()
    cy.getDataTest('grudge-list').within(() => {
      cy.get('li').should('have.length', 0)
    })

  })




})