import CheckOut from '../page-objects/checkout'
import Authentication from '../page-objects/authentication'
import addToCart from '../page-objects/addtocart'

describe('CheckOut', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should checkout items in the cart', () => {
        Authentication.login('colleen.williams0702@gmail.com', 'QUALITYcamp22!')
        cy.url().should('contain', 'products')
        cy.get(Authentication.productList).should('be.visible')
        cy.get(addToCart.qualityFittedHatItem).should('be.visible')
        // adding items to cart
        addToCart.addCartItems()
        // check items have been added to cart
        cy.get(addToCart.cartItemName).should('have.text', ' Quality Fitted Hat ')
        // proceed to checkout and enter information

        CheckOut.checkOutFlow('Colleen Brown', 'colleen.williams0702@gmail.com', 'The Orchards', 'Old Harbour Road', 'Jamaica', 'St Catherine', '00000')
        // after entering checkout info, proceed to card payment
        CheckOut.paymentInfo('4242 4242 4242 4242', '05/23', '123')
        // payment is complete and we are checking to ensure we obtained an invoice number and thank you note
        cy.get(CheckOut.invoiceNumber).should('exist')
        cy.get(CheckOut.thankYouNote).should('contain', 'Thank you for your order')
    })

    it('should not be able to checkout without an email', () => {
        Authentication.login('colleen.williams0702@gmail.com', 'QUALITYcamp22!')
        cy.url().should('contain', 'products')
        cy.get(Authentication.productList).should('be.visible')
        cy.get(addToCart.qualityFittedHatItem).should('be.visible')
        // added items to cart
        addToCart.addCartItems()
        cy.get(addToCart.cartItemName).should('have.text', ' Quality Fitted Hat ')
        // checkout entering every information except the email
        CheckOut.checkOutFlow('Colleen Brown', ' ', 'The Orchards', 'Old Harbour Road', 'Jamaica', 'St Catherine', '00000')
        // checks to ensure user cannot checkout without an email
        cy.get(CheckOut.requiredFeildMessage).should('be.visible')

    })

    it('should not be able to checkout without a zipcode', () => {
        Authentication.login('colleen.williams0702@gmail.com', 'QUALITYcamp22!')
        cy.url().should('contain', 'products')
        cy.get(Authentication.productList).should('be.visible')
        cy.get(addToCart.qualityFittedHatItem).should('be.visible')
        // added items to cart
        addToCart.addCartItems()
        cy.get(addToCart.cartItemName).should('have.text', ' Quality Fitted Hat ')
        // checkout entering every information except the zipcode
        CheckOut.checkOutFlow('Colleen Brown', 'colleen.williams0702@gmail.com', 'The Orchards', 'Old Harbour Road', 'Jamaica', 'St Catherine', ' ')
        // checks to ensure user cannot checkout without a zipcode
        cy.get(CheckOut.requiredFeildMessage).should('be.visible')
    })
})