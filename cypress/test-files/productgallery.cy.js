import Authentication from "../page-objects/authentication"
import ProductGallery from "../page-objects/productgallery"

describe('Product-Gallery-Page', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('should display the product gallery page', () => {
        Authentication.login('colleen.williams0702@gmail.com', 'QUALITYcamp22!')
        cy.url().should('contain', 'products')
        cy.get(Authentication.productList).should('be.visible')
    })
    it('should return to the home page when the home button is clicked', () => {
        Authentication.login('colleen.williams0702@gmail.com', 'QUALITYcamp22!')
        cy.url().should('contain', 'products')
        cy.get(Authentication.productList).should('be.visible')
        ProductGallery.productPage()

    })
    it('should display the category of items', () => {
        Authentication.login('colleen.williams0702@gmail.com', 'QUALITYcamp22!')
        cy.url().should('contain', 'products')
        cy.get(Authentication.productList).should('be.visible')
        cy.get(ProductGallery.productCategory).should('be.visible')

    })

})
