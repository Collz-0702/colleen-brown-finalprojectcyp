class Contact {
    get contactButton() {
        return ('button[id="top-contact"]')
    }
    get contactFirstName() {
        return ('#firstName')
    }
    get contactLastName() {
        return ('#lastName')
    }
    get contactEmail() {
        return ('#email')
    }
    get contactSubject() {
        return ('#subject')
    }
    get contactMsg() {
        return ('#message')
    }
    get sendMsgButton() {
        return ('button[class="chakra-button css-vs0e4t"]')
    }
    get errorMsg() {
        return ('[class="chakra-form__error-message css-170ki1a"]')
    }
    get contactTwitter() {
        return ('a[href="https://twitter.com/qualityworkscg"]')
    }
    get successMsg() {
        return ('#toast-1')
    }

    contactQualityShop(firstName, lastName, email, subject, message) {
        cy.get(this.contactButton).click()
        cy.get(this.contactFirstName).type(firstName)
        cy.get(this.contactLastName).type(lastName)
        cy.get(this.contactEmail).type(email)
        cy.get(this.contactSubject).type(subject)
        cy.get(this.contactMsg).type(message)
        cy.get(this.sendMsgButton).click()
    }
    contactQualityTwitter() {
        cy.get(this.contactButton).click()
        cy.get(this.contactTwitter).click()
    }

}
export default new Contact()