import Authentication from '../page-objects/authentication.js'

describe('Logining onto the platform', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    // change email in this first test if running more than once.(A number can be removed) Emails cannot be repeated for registering and faker doesnt work for signing up
    it('should signup with a valid credentials', () => {
        // user goes to home page, then sign up page then enteres credentials
        Authentication.signUp('colleen990682@gmail.com', 'QUALITYcamp22!')
        // checks user is signed in and sent to the products page
        cy.get(Authentication.productList).should('be.visible')
        cy.url().should('contain', 'products')
    })
    it('should login with valid credentials', () => {
        // user is logged in with valid credentials
        Authentication.login('colleen1995@gmail.com', 'QUALITYcamp22!')
        // checks that user is taken to the product gallery apge
        cy.url().should('contain', 'products')
        cy.get(Authentication.productList).should('be.visible')

    })
    it('should not login with an incorrect credentials', () => {
        // attempts to login with fake info
        Authentication.login('colleen1995@gmail.com', 'QUALITYCAMp22')
        // checks the user is unable to login with incorrect credentials
        cy.get(Authentication.lockedOutMessage).should('have.text', 'Wrong email or password.')
        cy.get(Authentication.productList).should('not.exist')
    })
})