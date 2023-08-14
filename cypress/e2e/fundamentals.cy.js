describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/fundamentals')
  })

  it('Contain Correct header', () => {
    // cy.get('[data-cy="fundamentals-header"]').contains(/Testing Fundamentals/i)
    // cy.get('[data-cy="fundamentals-header"]').should('contain.text', 'Testing Fundamentals')
    cy.getDataTest("fundamentals-header").should('contain.text', 'Testing Fundamentals')
  })

  it('should click the first accordion', () => {
    cy.contains(/Your tests will exist in a describe block./i).should('not.be.visible')
    cy.get('[data-cy="accordion-item-1"] div[role=button]').click()
    cy.contains(/Your tests will exist in a describe block./i).should('be.visible')
    cy.get('[data-cy="accordion-item-1"] div[role=button]').click()
    cy.contains(/Your tests will exist in a describe block./i).should('not.be.visible')
  })
  
  
})