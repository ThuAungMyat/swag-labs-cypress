const {givenLogInAsStandardUser} = require('../support/logIn')
const credentials = require('../fixtures/credentials.json')

describe('Purchase products', () => {
    it('logs in and purchase products', () => {
        givenLogInAsStandardUser()
        givenAddProductsToCart()
        whenProductsAddedToCart()
        whenClickCheckout()
        whenFillInfo()
        thenVerifyTotalAndClickFinish()
    })

    const givenAddProductsToCart = () => {
        cy.get('div.inventory_list').find('div.inventory_item').eq(0).contains('ADD TO CART').click()
        cy.get('div.inventory_list').find('div.inventory_item').eq(1).contains('ADD TO CART').click()
        cy.get('div.inventory_list').find('div.inventory_item').eq(2).contains('ADD TO CART').click()
    }

    const whenProductsAddedToCart = () => {
        const cart = cy.get('div.shopping_cart_container').find('span')
        cart.should('have.text', '3')
        cart.click()
    }

    const whenClickCheckout = () => {
        cy.get('div.cart_footer').find('a.btn_action').click()
    }

    const whenFillInfo = () => {
        const info = cy.get('div.checkout_info')
        cy.get('div.checkout_info').find('input[id="first-name"]').clear().type('John')
        cy.get('div.checkout_info').find('input[id="last-name"]').clear().type('Wick')
        cy.get('div.checkout_info').find('input[id="postal-code"]').clear().type('369369')
        cy.get('div.checkout_buttons').find('input.btn_primary').click()
    }

    const thenVerifyTotalAndClickFinish = () => {
        //TO DO : get item prices and verify total
        cy.get('div.cart_footer').find('a.btn_action').click()
        cy.get('div.checkout_complete_container').find('h2').should('have.text', 'THANK YOU FOR YOUR ORDER')
    }


})
