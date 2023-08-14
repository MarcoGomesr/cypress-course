describe('forms test', () => {
  beforeEach(() => { 
    cy.visit('/forms')
  })

  it('test subscribe form', () => {
    cy.contains(/testing forms/i)
    cy.getDataTest('subscribe-form').find('input').as('subcribe-input')
    cy.get('@subcribe-input').type('marcogomesr@gmail.com')
    cy.contains(/Successfully subbed: marcogomesr@gmail.com!/i).should('not.exist')
    cy.getDataTest('subscribe-button').click()
    cy.contains(/Successfully subbed: marcogomesr@gmail.com!/i).should('exist')
    cy.wait(3000)
    cy.contains(/Successfully subbed: marcogomesr@gmail.com!/i).should('no.exist')

    cy.get('@subcribe-input').type('marcogomesr@gmail.io')
    cy.contains(/invalid email: marcogomesr@gmail.io!/i).should('no.exist')
    cy.getDataTest('subscribe-button').click()
    cy.contains(/invalid email: marcogomesr@gmail.io!/i).should('exist')
    cy.wait(3000)
    cy.contains(/invalid email: marcogomesr@gmail.io!/i).should('no.exist')

    cy.contains(/fails!/i).should('no.exist')
    cy.getDataTest('subscribe-button').click()
    cy.contains(/fails!/i).should('exist')
  })
})