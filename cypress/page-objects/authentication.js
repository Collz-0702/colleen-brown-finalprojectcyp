class Authentication {
    get signInOrRegisterButton() {
        return ('#signInOrRegister')
    }
    get signUpOption() {
        return ('body > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > span:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)')
    }
    get email() {
        return ('[type ="email"]')
    }
    get passWord() {
        return ('[type = "password"]')
    }
    get signUpButton() {
        return ('.auth0-label-submit')
    }
    get productList() {
        return ('.css-12qzrsi')
    }
    get lockedOutMessage() {
        return ('.auth0-global-message.auth0-global-message-error')
    }

    signUp(email, passWord) {
        cy.get(this.signInOrRegisterButton).click()
        cy.get(this.signUpOption).click()
        cy.get(this.email).type(email)
        cy.get(this.passWord).type(passWord)
        cy.get(this.signUpButton).click()
    }

    login(email, passWord) {
        cy.get(this.signInOrRegisterButton).click()
        cy.get(this.email).type(email)
        cy.get(this.passWord).type(passWord)
        cy.get(this.signUpButton).click()
    }

}
export default new Authentication()