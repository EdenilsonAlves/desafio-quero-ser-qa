import localizador from '../support/elementos/localizadores'

describe('teste automatizado login e logout', () => {

  beforeEach(() => {
    cy.visit('/');

  })

  it('Deve realizar login e logout com sucesso', () => {

    cy.get(localizador.login.username).type(Cypress.env('user_name'))
    cy.get(localizador.login.password).type(Cypress.env('password'))
    cy.get(localizador.login.btn_login).click()
    cy.get(localizador.inventory.titulo_products).should('have.text', 'Products')
    cy.get(localizador.menu.setting).click()
    cy.get(localizador.menu.logout).should('have.text', 'Logout').click()
    cy.get(localizador.login.btn_login).should('have.value', 'Login')
  })

})











