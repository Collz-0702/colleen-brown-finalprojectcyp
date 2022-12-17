class Cart {
    get detailedCart() {
        return ('button[class= "snipcart-button-link"]')
    }
    get cartCounterNumber() {
        return ('.snipcart-cart-header__option.snipcart-cart-header__count.snipcart__font--secondary.snipcart__font--bold')
    }
    get continueShoppingButton() {
        return ('.snipcart-cart-header__close-button.snipcart-modal__close')
    }
    get checkoutButton() {
        return ('.snipcart-button-primary')
    }
    get emptyCartMsg() {
        return ('.snipcart-empty-cart__title')
    }
    get removeCartIcon() {
        return ('[title="Remove item"]')
    }
    goToCheckout() {
        cy.get(this.checkoutButton).click()
    }
    removeCartItem() {
        cy.wait(1500)
        cy.get(this.removeCartIcon).should('be.visible').click()

    }
}
export default new Cart()