import Authentication from '../page-objects/authentication.js'
import addToCart from '../page-objects/addtocart'

describe('Adding items to the cart', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should add a Fitted Hat to the cart', () => {
        Authentication.login('colleen1995@gmail.com', 'QUALITYcamp22!')
        cy.url().should('contain', 'products')
        cy.get(Authentication.productList).should('be.visible')

        cy.get(addToCart.qualityFittedHatItem).should('be.visible')
        // adds fitted hat to the cart
        addToCart.addCartItems()
        // asserts the correct item was added to cart
        cy.get(addToCart.cartItemName).should('have.text', ' Quality Fitted Hat ')

    })
    it('should add multiple items to the cart', () => {
        Authentication.login('colleen1995@gmail.com', 'QUALITYcamp22!')
        cy.url().should('contain', 'products')
        cy.get(Authentication.productList).should('be.visible')

        cy.get(addToCart.qualityFittedHatItem).should('be.visible')
        // adds mutltiple items to cart
        addToCart.addMultipleCartItems()
        // asserts the items added are present in the cart
        cy.get(addToCart.multipleCartItemName).should('have.text', ' Quality Mousepad  Quality Trucker Hat  Quality Fitted Hat ')

    })
    it('should increase the quantity of an item before adding to cart', () => {
        Authentication.login('colleen1995@gmail.com', 'QUALITYcamp22!')
        cy.url().should('contain', 'products')
        cy.get(Authentication.productList).should('be.visible')

        cy.get(addToCart.qualityFittedHatItem).should('be.visible')
        // increases the item quantity from gallery page then adds to cart
        addToCart.increaseCartItem()
        // asserts the item was added and the amount that was specified to be added
        cy.get(addToCart.cartItemName).should('have.text', ' Quality Fitted Hat ')
        cy.get(addToCart.cartCounterNumber).should('have.text', ' 2 ')


    })

})