const credentials = require('../fixtures/credentials.json');

const givenLogInAsStandardUser = () => {
    cy.visit('https://www.saucedemo.com/v1/index.html');
    cy.get('div.login-box').find('input[name="user-name"]').type(credentials[0].username);
    cy.get('div.login-box').find('input[name="password"]').type(credentials[0].password);
    cy.get('div.login-box').find('input[id="login-button"]').click();
    cy.wait(3000);
};

const givenLogInAsLockedOutUser = () => {
    cy.visit('https://www.saucedemo.com/v1/index.html');
    cy.get('div.login-box').find('input[name="user-name"]').type(credentials[1].username);
    cy.get('div.login-box').find('input[name="password"]').type(credentials[0].password);
    cy.get('div.login-box').find('input[id="login-button"]').click();
    cy.wait(3000);
};

module.exports = {
    givenLogInAsStandardUser,
    givenLogInAsLockedOutUser
};
