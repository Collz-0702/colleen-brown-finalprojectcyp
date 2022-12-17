import Authentication from '../page-objects/authentication'
import ProductGallery from '../page-objects/productgallery'
import Search from '../page-objects/search'

describe('Search', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should search for hat products', () => {
        Authentication.login('colleen1995@gmail.com', 'QUALITYcamp22!')
        // calls the search function and searches for hats
        Search.searchItem('hat')
        // resulting hats appear
        cy.get(Search.searchProductPage).should('be.visible')
        // name of the hats that appeared
        cy.get(Search.searchHats).should('contain.text', 'Quality Fitted HatQuality Trucker Hat')
    })

    it('should not return products that are not available', () => {
        Authentication.login('colleen1995@gmail.com', 'QUALITYcamp22!')
        // searched for water which isnt available
        Search.searchItem('water')
        cy.get(Search.searchProductPage).should('be.visible')
        cy.get(ProductGallery.productName).should('not.exist')
    })

    it('should not be able to search for product using price', () => {
        Authentication.login('colleen1995@gmail.com', 'QUALITYcamp22!')
        // searched for an item using the price
        Search.searchItem('$20')
        cy.get(Search.searchProductPage).should('be.visible')
        cy.get(ProductGallery.productName).should('not.exist')
    })

})