import Authentication from '../page-objects/authentication.js'
import addToCart from '../page-objects/addtocart'
import Cart from '../page-objects/cart'

describe('Cart', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('should reflect the correct counter number in the cart', () => {
        Authentication.login('colleen1995@gmail.com', 'QUALITYcamp22!')
        cy.url().should('contain', 'products')
        cy.get(Authentication.productList).should('be.visible')
        // asserts that the cart number does not exist/nothing is present in the cart
        cy.get(addToCart.cartCounterNumber).should('not.exist')
        cy.get(addToCart.qualityFittedHatItem).should('be.visible')
        // item quantity is increased and added to the cart
        addToCart.increaseCartItem()
        // asserts the cart counter number has increased to reflect the number of items present in cart/quantity of product added
        cy.get(addToCart.cartCounterNumber).should('have.text', ' 2 ')
        cy.get(addToCart.cartItemName).should('have.text', ' Quality Fitted Hat ')
    })

    it('should go to checkout page after clicking checkout', () => {
        Authentication.login('colleen1995@gmail.com', 'QUALITYcamp22!')
        cy.url().should('contain', 'products')
        cy.get(Authentication.productList).should('be.visible')

        cy.get(addToCart.qualityFittedHatItem).should('be.visible')
        // items are added to the cart
        addToCart.addCartItems()
        cy.get(addToCart.cartItemName).should('have.text', ' Quality Fitted Hat ')
        // checkout button is clicked
        Cart.goToCheckout()
        // asserts user is taken to the checkout DOM
        cy.url().should('contain', 'checkout')

    })
    it('should remove an item from the cart', () => {
        Authentication.login('colleen1995@gmail.com', 'QUALITYcamp22!')
        cy.url().should('contain', 'products')
        cy.get(Authentication.productList).should('be.visible')

        cy.get(addToCart.qualityFittedHatItem).should('be.visible')
        // item is added to the cart
        addToCart.addCartItems()
        cy.get(addToCart.cartItemName).should('have.text', ' Quality Fitted Hat ')
        // item is removed from the cart
        Cart.removeCartItem()
        // asserts that the item is removed from the cart/does not exist in the cart/cart is empty
        cy.get(Cart.emptyCartMsg).should('contain', 'Your cart is empty')
        cy.get(addToCart.cartItemName).should('not.exist')

    })


})