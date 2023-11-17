// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('Gestion Stock')
    cy.contains('Gérer efficacement votre stock !')
    cy.contains('a', 'Voir le stock').click()
    cy.get('a[title="Ajouter"]').click()
    cy.get('input').eq(0).clear()
    const name = 'truc_' + Cypress._.random(1e6)
    cy.get('input').eq(0).type(name)
    cy.get('input').eq(1).type('12')
    cy.get('input').eq(2).clear()
    cy.get('input').eq(2).type('13')
    cy.contains('button', 'Ajouter').click()
    cy.contains(name).click()
    cy.get('button[title="Supprimer"]').should('be.visible').click()
  })
})
