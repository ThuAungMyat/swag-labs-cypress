const {givenLogInAsStandardUser} = require('../support/logIn')
const credentials = require('../fixtures/credentials.json')

describe('Purchase products', () => {
    it('logs in and purchase products', () => {
        givenLogInAsStandardUser()
        givenAddProductsToCart()
    })

    const givenAddProductsToCart = () => {
        cy.get('div.inventory_list').find('div.inventory_item').eq(0).contains('ADD TO CART').click()
        cy.get('div.inventory_list').find('div.inventory_item').eq(1).contains('ADD TO CART').click()
        cy.get('div.inventory_list').find('div.inventory_item').eq(1).contains('ADD TO CART').click()
    }

})
