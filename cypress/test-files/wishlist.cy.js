import Authentication from '../page-objects/authentication'
import Favourites from '../page-objects/wishlist'
import addToCart from '../page-objects/addtocart'

describe('Adding Favourite Items', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('should add Fitted Hat to favorite from homepage', () => {
        // user is logged in with valid credentials
        Authentication.login('colleen1995@gmail.com', 'QUALITYcamp22!')
        // checks that user is taken to the product gallery apge
        cy.url().should('contain', 'products')
        cy.get(Authentication.productList).should('be.visible')
        // user adds fitted hat from homepage
        Favourites.addToFav()
        // check that item was added
        cy.get(Favourites.addMsg).should('have.text', 'Quality Fitted Hat added to favorites')

    })
    it('should remove item from favorite', () => {
        // user is logged in with valid credentials
        Authentication.login('colleen1995@gmail.com', 'QUALITYcamp22!')
        // checks that user is taken to the product gallery apge
        cy.url().should('contain', 'products')
        cy.get(Authentication.productList).should('be.visible')
        // user adds fitted hat from homepage
        Favourites.addToFav()
        cy.get(Favourites.addMsg).should('have.text', 'Quality Fitted Hat added to favorites')
        // user is removing item from favourite that was added
        Favourites.removeItem()
        // check that item was removed
        cy.get(Favourites.favCounterNumber).should('have.text', 'Favorites [0]')
        cy.get(Favourites.emptyFav).should('have.text', 'No favorites added!')

    })
    it('should add more than one item to favorite', () => {
        // user is logged in with valid credentials
        Authentication.login('colleen1995@gmail.com', 'QUALITYcamp22!')
        // checks that user is taken to the product gallery apge
        cy.url().should('contain', 'products')
        cy.get(Authentication.productList).should('be.visible')
        // user adds multiple items to favorite from homepage
        Favourites.addMultipleToFav()
        // checks the items added to favorite
        cy.get(Favourites.favCounterNumber).should('have.text', 'Favorites [3]')
        // navigate to favourite
        Favourites.goToFav()
        cy.get(Favourites.favItemName).should('have.text', 'Quality Fitted HatQuality Trucker HatQuality Mousepad')

    })
    it('should not have any item in favorite if item was not added', () => {
        // user is logged in with valid credentials
        Authentication.login('colleen1995@gmail.com', 'QUALITYcamp22!')
        // checks that user is taken to the product gallery apge
        cy.url().should('contain', 'products')
        // user logs in and sees products but adds none to favorite
        cy.get(Authentication.productList).should('be.visible')
        // user goes to favourite cart
        Favourites.goToFav()
        cy.get(Favourites.favCounterNumber).should('have.text', 'Favorites [0]')
        cy.get(Favourites.emptyFav).should('have.text', 'No favorites added!')

    })
    it('should add item from favorite to cart', () => {
        // user is logged in with valid credentials
        Authentication.login('colleen1995@gmail.com', 'QUALITYcamp22!')
        // checks that user is taken to the product gallery apge
        cy.url().should('contain', 'products')
        cy.get(Authentication.productList).should('be.visible')
        // user adds fitted hat from homepage
        Favourites.addToFav()
        cy.get(Favourites.addMsg).should('have.text', 'Quality Fitted Hat added to favorites')
        // user goes to favourite
        Favourites.goToFav()
        // user adds item to cart
        Favourites.addToCartfromFav()
        // checks item was added
        cy.get(addToCart.cartItemName).should('have.text', ' Quality Fitted Hat ')

    })
})