import Authentication from "../page-objects/authentication";
import ProductDetails from "../page-objects/productdetails"

describe('Product Details', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should show the product description', () => {
        Authentication.login('colleen1995@gmail.com', 'QUALITYcamp22!')
        cy.url().should('contain', 'products')
        cy.get(Authentication.productList).should('be.visible')
        // clicks on the hat product
        ProductDetails.productDetailsHat()
        // shows the product description
        cy.get(ProductDetails.productDescription).should('be.visible')
    })

    it('should go to the next product picture', () => {
        Authentication.login('colleen1995@gmail.com', 'QUALITYcamp22!')
        cy.url().should('contain', 'products')
        cy.get(Authentication.productList).should('be.visible')
        // clicks on product then clicks on the next image of the product
        ProductDetails.productDetailsPicture()
        // asserts the second image of the product is seen
        cy.get(ProductDetails.imageNameTwo).should('be.visible')

    })
    it('should go back to the home page', () => {
        Authentication.login('colleen1995@gmail.com', 'QUALITYcamp22!')
        cy.get(Authentication.productList).should('be.visible')
        // clicks on product then clicks on the home button
        ProductDetails.backToProductPage()
        // asserts that the user returns to the gallery page
        cy.url().should('contain', 'products')

    })

})