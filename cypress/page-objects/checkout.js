class CheckOut {
    get checkoutButton() {
        return ('.snipcart-button-primary')
    }
    get fullName() {
        return ('[name="name"]')
    }
    get email() {
        return ('[name="email"]')
    }
    get streetAddress() {
        return ('[name="address1"]')
    }
    get city() {
        return ('[name="city"]')
    }
    get country() {
        return ('[name="country"]')
    }
    get province() {
        return ('[name="province"]')
    }
    get zipCode() {
        return ('[name="postalCode"]')
    }
    get continuePaymentButton() {
        return ('.snipcart-button-primary.snipcart-submit.snipcart-base-button.is-icon-right')
    }
    get cardNumber() {
        return ('[name = "card-number"]')
    }
    get cardDate() {
        return ('[name = "expiry-date"]')
    }
    get cvvNumber() {
        return ('#cvv')
    }
    get placeOrderButton() {
        return ('[type="submit"]')
    }
    get requiredFeildMessage() {
        return ('.snipcart-field-error.snipcart__font--tiny')
    }
    get invoiceNumber() {
        return ('.snipcart-order__invoice-number')
    }
    get thankYouNote() {
        return (':nth-child(2) > .snipcart__font--subtitle')
    }

    checkOutFlow(fullName, email, streetAddress, city, country, province, zipCode) {
        cy.get(this.checkoutButton).click()
        cy.get(this.fullName).type(fullName)
        cy.get(this.email).type(email)
        cy.get(this.streetAddress).type(streetAddress)
        cy.get(this.city).type(city)
        cy.get(this.country).select(country)
        cy.get(this.province).type(province)
        cy.get(this.zipCode).type(zipCode)
        cy.get(this.continuePaymentButton).scrollIntoView()
        cy.get(this.continuePaymentButton).click({ force: true })
    }
    paymentInfo(cardNumber, cardDate, cvvNumber) {
        cy.iframe('.snipcart-payment-card-form iframe').find(this.cardNumber).type(cardNumber)
        cy.iframe('.snipcart-payment-card-form iframe').find(this.cardDate).type(cardDate)
        cy.iframe('.snipcart-payment-card-form iframe').find(this.cvvNumber).type(cvvNumber)
        cy.get(this.placeOrderButton).click()
    }

}
export default new CheckOut()