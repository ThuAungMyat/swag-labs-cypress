const credentials = require('../fixtures/credentials.json')

const givenLogInAsStandardUser = () => {
    cy.visit(Cypress.config().baseUrl)
    cy.get('div.login-box').find('input[name="user-name"]').type(credentials[0].username)
    cy.get('div.login-box').find('input[name="password"]').type(credentials[0].password)
    cy.get('div.login-box').find('input[id="login-button"]').click()
    cy.wait(1000)
}

const givenLogInAsLockedOutUser = () => {
    cy.visit(Cypress.config().baseUrl)
    cy.get('div.login-box').find('input[name="user-name"]').type(credentials[1].username)
    cy.get('div.login-box').find('input[name="password"]').type(credentials[0].password)
    cy.get('div.login-box').find('input[id="login-button"]').click()
    cy.wait(1000)
    thenVerifyErrorMessage()
}

const thenVerifyErrorMessage = () => {
    cy.get('div.login-box').find('h3').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
}

const givenLogInAsProblemUser = () => {
    cy.visit(Cypress.config().baseUrl)
    cy.get('div.login-box').find('input[name="user-name"]').type(credentials[2].username)
    cy.get('div.login-box').find('input[name="password"]').type(credentials[0].password)
    cy.get('div.login-box').find('input[id="login-button"]').click()
    cy.wait(1000)
    thenVerifyProductImages()
}

const thenVerifyProductImages = () => {
    cy.get('div.inventory_list').find('img').eq(0).should('not.be.visible')
    cy.get('div.inventory_list').find('img').eq(1).should('not.be.visible')
    cy.get('div.inventory_list').find('img').eq(2).should('not.be.visible')
}

const givenLogInAsPerformanceGlitchUser = () => {
    cy.visit(Cypress.config().baseUrl)
    cy.get('div.login-box').find('input[name="user-name"]').type(credentials[3].username)
    cy.get('div.login-box').find('input[name="password"]').type(credentials[0].password)
    cy.get('div.login-box').find('input[id="login-button"]').click()
    cy.wait(1000)
}
module.exports = {
    givenLogInAsStandardUser,
    givenLogInAsLockedOutUser,
    givenLogInAsProblemUser,
    givenLogInAsPerformanceGlitchUser
}
