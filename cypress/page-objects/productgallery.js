class ProductGallery {
    get productImage() {
        return ('img[src="/images/quality-hat-model.jpg"]')
    }
    get homeButton() {
        return ('[id="top-home"]')
    }
    get productName() {
        return ('[class= "chakra-text css-1n64n71"]')
    }
    get productCategory() {
        return ('.css-1ccau2i')
    }
    get productList() {
        return ('.css-12qzrsi')
    }

    productPage() {
        cy.get(this.productImage).click()
        cy.get(this.homeButton).click()
    }


}
export default new ProductGallery()