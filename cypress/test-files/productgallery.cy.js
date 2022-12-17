import Authentication from "../page-objects/authentication"
import ProductGallery from "../page-objects/productgallery"

describe('Product-Gallery-Page', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('should display the product gallery page', () => {
        Authentication.login('colleen.williams0702@gmail.com', 'QUALITYcamp22!')
        // checks that the product gallery page is present after logining in
        cy.url().should('contain', 'products')
        cy.get(Authentication.productList).should('be.visible')
    })
    it('should return to the home page when the home button is clicked', () => {
        Authentication.login('colleen.williams0702@gmail.com', 'QUALITYcamp22!')
        cy.get(Authentication.productList).should('be.visible')
        // product is clicked and taken to a different page, home button is then clicked
        ProductGallery.productPage()
        // checks that user is back on the gallery page
        cy.url().should('contain', 'products')

    })
    it('should display the category of items', () => {
        Authentication.login('colleen.williams0702@gmail.com', 'QUALITYcamp22!')
        cy.url().should('contain', 'products')
        cy.get(Authentication.productList).should('be.visible')
        // checks that teh category is present on items
        cy.get(ProductGallery.productCategory).should('be.visible')

    })

})
