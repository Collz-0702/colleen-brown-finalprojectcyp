class addToCart {
    get qualityFittedHatItem() {
        return ('#product-0>#add-to-cart.chakra-button')
    }
    get qualityTruckerHat() {
        return ('#product-1>#add-to-cart.chakra-button')
    }
    get qualityMousePad() {
        return ('#product-2>#add-to-cart.chakra-button')
    }
    get cartItemName() {
        return ('.snipcart-item-line__title')
    }
    get cartButton() {
        return ('[type="button"]#top-cart')
    }
    get detailedCartButton() {
        return ('[class= "snipcart-button-link"]')
    }
    get increaseQuantityButton() {
        return ('[title= "Increment quantity"]')
    }
    get cartTotalFees() {
        return ('.snipcart-summary-fees__amount.snipcart-summary-fees__amount--highlight.snipcart__font--large')
    }
    get itemPriceFee() {
        return ('.snipcart-item-quantity__total-price.snipcart__font--bold.snipcart__font--secondary')
    }
    get continueShoppingButton() {
        return ('[class="snipcart-modal__close-title snipcart__font--std"]')
    }
    get increaseValue() {
        return ('#product-0-increase')
    }
    get multipleCartItemName() {
        return ('.snipcart-item-line__title.snipcart__font--xlarge.snipcart__font--secondary.snipcart__font--black')
    }
    get cartCounterNumber() {
        return ('.snipcart-cart-header__option.snipcart-cart-header__count.snipcart__font--secondary.snipcart__font--bold')
    }
    addCartItems() {
        cy.get(this.qualityFittedHatItem).scrollIntoView()
        cy.wait(1500)
        cy.get(this.qualityFittedHatItem).should('be.visible').click()
    }
    addMultipleCartItems() {
        cy.get(this.qualityFittedHatItem).scrollIntoView()
        cy.wait(1500)
        cy.get(this.qualityFittedHatItem).should('be.visible').click()
        cy.get(this.continueShoppingButton).click()
        cy.get(this.qualityTruckerHat).should('be.visible').click()
        cy.get(this.continueShoppingButton).click()
        cy.get(this.qualityMousePad).should('be.visible').click({ force: true })


    }
    increaseCartItem() {
        cy.get(this.qualityFittedHatItem).scrollIntoView()
        cy.wait(1500)
        cy.get(this.increaseValue).dblclick()
        cy.get(this.qualityFittedHatItem).click()

    }

}
export default new addToCart()
