const {givenLogInAsStandardUser} = require('../support/logIn')
const credentials = require('../fixtures/credentials.json')


describe('Purchase products', () => {
    let total = 0

    it('logs in and purchases products', () => {
        givenLogInAsStandardUser()
        givenAddProductsToCart()
        whenProductsAddedToCart()
        whenClickCheckout()
        whenFillInfo()
        thenVerifyTotalAndClickFinish()
    })

    const givenAddProductsToCart = () => {
        const item1 = cy.get('div.inventory_list').find('div.inventory_item').eq(0)
        item1.get('div.inventory_item_price').eq(0).invoke('text').then((itemPrice1) => {
            total += parseFloat(itemPrice1.replace('$', ''))
        })
        cy.get('div.inventory_list').find('div.inventory_item').eq(0).contains('ADD TO CART').click()

        const item2 = cy.get('div.inventory_list').find('div.inventory_item').eq(1)
        item2.get('div.inventory_item_price').eq(1).invoke('text').then((itemPrice2) => {
            total += parseFloat(itemPrice2.replace('$', ''))

        })
        cy.get('div.inventory_list').find('div.inventory_item').eq(1).contains('ADD TO CART').click()

        const item3 = cy.get('div.inventory_list').find('div.inventory_item').eq(2)
        item3.get('div.inventory_item_price').eq(2).invoke('text').then((itemPrice3) => {
            total += parseFloat(itemPrice3.replace('$', ''))
            cy.task('setOrderTotal', {_total: total})
        })
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
        cy.get('div.checkout_info').find('input[id="first-name"]').clear().type('John')
        cy.get('div.checkout_info').find('input[id="last-name"]').clear().type('Wick')
        cy.get('div.checkout_info').find('input[id="postal-code"]').clear().type('369369')
        cy.get('div.checkout_buttons').find('input.btn_primary').click()
    }

    const thenVerifyTotalAndClickFinish = () => {
        cy.task('getOrderTotal').then(logTotalPrice())
        const subTotal = cy.get('div.summary_subtotal_label')
        subTotal.invoke('text').then((subTotal) => {
            expect(total).to.equal(parseFloat(subTotal.split('$')[1]))
        })
        cy.get('div.cart_footer').find('a.btn_action').click()
        cy.get('div.checkout_complete_container').find('h2').should('have.text', 'THANK YOU FOR YOUR ORDER')
    }

    const logTotalPrice = () => (totalPrice) => {
        cy.log(totalPrice)
    }
})
