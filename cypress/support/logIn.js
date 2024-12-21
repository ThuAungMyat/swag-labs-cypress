const credentials = require('../fixtures/credentials.json')
const baseURL = 'https://www.saucedemo.com/v1/index.html'

const givenLogInAsStandardUser = () => {
    cy.visit(baseURL)
    cy.get('div.login-box').find('input[name="user-name"]').type(credentials[0].username)
    cy.get('div.login-box').find('input[name="password"]').type(credentials[0].password)
    cy.get('div.login-box').find('input[id="login-button"]').click()
    cy.wait(3000)
}

const givenLogInAsLockedOutUser = () => {
    cy.visit(baseURL)
    cy.get('div.login-box').find('input[name="user-name"]').type(credentials[1].username)
    cy.get('div.login-box').find('input[name="password"]').type(credentials[0].password)
    cy.get('div.login-box').find('input[id="login-button"]').click()
    cy.wait(3000)
}

const givenLogInAsProblemUser = () => {
    cy.visit(baseURL)
    cy.get('div.login-box').find('input[name="user-name"]').type(credentials[2].username)
    cy.get('div.login-box').find('input[name="password"]').type(credentials[0].password)
    cy.get('div.login-box').find('input[id="login-button"]').click()
    cy.wait(3000)
}

const givenLogInAsPerformanceGlitchUser = () => {
    cy.visit(baseURL)
    cy.get('div.login-box').find('input[name="user-name"]').type(credentials[3].username)
    cy.get('div.login-box').find('input[name="password"]').type(credentials[0].password)
    cy.get('div.login-box').find('input[id="login-button"]').click()
    cy.wait(3000)
}
module.exports = {
    givenLogInAsStandardUser,
    givenLogInAsLockedOutUser,
    givenLogInAsProblemUser,
    givenLogInAsPerformanceGlitchUser
}
