class ProductDetails {
    get productDescription() {
        return ('body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > p:nth-child(2)')
    }
    get productBackButton() {
        return ('.chakra-heading.css-18j379d')
    }
    get imageArrowRight() {
        return ('button[class= "control-arrow control-next"]')
    }
    get imageArrowLeft() {
        return ('button[class= "control-arrow control-prev"]')
    }
    get imageNameTwo() {
        return ('li[class= "slide selected"] p[class= "legend"]')
    }
    get productImage() {
        return ('img[src="/images/quality-hat-model.jpg"]')
    }
    productDetailsHat() {
        cy.get(this.productImage).click()
    }

    productDetailsPicture() {
        cy.get(this.productImage).click()
        cy.get(this.imageArrowRight).click()
    }

    backToProductPage() {
        cy.get(this.productImage).click()
        cy.get(this.productBackButton).click()
    }

}
export default new ProductDetails()