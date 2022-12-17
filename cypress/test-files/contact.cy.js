import Authentication from '../page-objects/authentication'
import Contact from '../page-objects/contact'



describe('Contacting Quality', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should successfully send a contact message', () => {
        Authentication.login('colleen1995@gmail.com', 'QUALITYcamp22!')
        // logins in, clicks contact button and enter message details
        Contact.contactQualityShop('Colleen', 'Brown', 'colleen.williams0702@gmail.com', 'Wrong Address', 'The order was sent to the wrong address')
        cy.get(Contact.successMsg).should('be.visible')
        // success message shown to prove contact message was sent
        cy.get(Contact.successMsg).should('contain', 'Message Sent!')

    })
    it('should not be able to send a contact message with missing email field', () => {
        Authentication.login('colleen1995@gmail.com', 'QUALITYcamp22!')
        // contact function is called and details entered except an email
        Contact.contactQualityShop('Colleen', 'Brown', ' ', 'Wrong Address', 'The order was sent to the wrong address')
        // shows error message
        cy.get(Contact.errorMsg).should('exist')
        cy.get(Contact.errorMsg).should('to.have.text', 'Email is invalid')
    })
    it('should be taken to Quality Twitter page', () => {
        Authentication.login('colleen1995@gmail.com', 'QUALITYcamp22!')
        // clicked on contact button then clicked on twitter button
        Contact.contactQualityTwitter()
        // checks that the quality shop twitter link is found within the DOM
        cy.get(Contact.contactTwitter).should('have.attr', 'href')

    })

})