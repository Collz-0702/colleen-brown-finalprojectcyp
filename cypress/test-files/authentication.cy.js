import Authentication from '../page-objects/authentication.js'

describe('Logining onto the platform', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it.skip('should signup with a valid credentials', () => {
        Authentication.signUp('colleen9902@gmail.com', 'QUALITYcamp22!')

        cy.url().should('contain', 'products')
        cy.get(Authentication.productList).should('be.visible')
        cy.url().should('contain', 'products')
    })
    it('should login with valid credentials', () => {
        Authentication.login('colleen1995@gmail.com', 'QUALITYcamp22!')
        cy.url().should('contain', 'products')
        cy.get(Authentication.productList).should('be.visible')

    })
    it('should not login with an incorrect credentials', () => {
        Authentication.login('colleen1995@gmail.com', 'QUALITYCAMp22')
        cy.get(Authentication.lockedOutMessage).should('have.text', 'Wrong email or password.')
        cy.get(Authentication.productList).should('not.exist')
    })
})