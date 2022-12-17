class Favourites {
    get fittedHatFavButton() {
        return ('#product-0 div:nth-child(2)>div:nth-child(1) >div:nth-child(1)>div:nth-child(2) >#add-to-favorite')
    }
    get truckerHatFavButton() {
        return ('#product-1 div:nth-child(2)>div:nth-child(1) >div:nth-child(1)>div:nth-child(2) >#add-to-favorite')
    }
    get qualityMouseFavButton() {
        return ('#product-2 div:nth-child(2)>div:nth-child(1) >div:nth-child(1)>div:nth-child(2) >#add-to-favorite')
    }
    get addMsg() {
        return ('[class="chakra-alert__title css-tidvy5"]')
    }
    get removeFittedHatFavButton() {
        return ('#product-0 div:nth-child(2)>div:nth-child(1) >div:nth-child(1)>div:nth-child(2) >#remove-from-favorite')
    }
    get favButton() {
        return ('#top-favorite')
    }
    get removeFromFavButton() {
        return ('#remove-favorite-btn')
    }
    get favItemName() {
        return ('.chakra-text.css-1n64n71')
    }
    get favCounterNumber() {
        return ('button[id="top-favorite"] p[class="chakra-text css-0"]')
    }
    get emptyFav() {
        return ('[class="chakra-stack css-owjkmg"] h2[class="chakra-heading css-kmq9po"]')
    }
    get addtoCart() {
        return ('#add-to-cart')
    }
    get cartButton() {
        return ('[type="button"]#top-cart')
    }
    addToFav() {
        cy.get(this.fittedHatFavButton).click()
        cy.get(this.favButton).click()
    }
    addMultipleToFav() {
        cy.get(this.fittedHatFavButton).click()
        cy.get(this.truckerHatFavButton).click()
        cy.get(this.qualityMouseFavButton).click()

    }
    removeFromFav() {
        cy.wait(1500)
        cy.get(this.removeFittedHatFavButton)
    }
    goToFav() {
        cy.get(this.favButton).click()
    }
    removeItem() {
        cy.get(this.favButton).click()
        cy.wait(1500)
        cy.get(this.removeFromFavButton).click()
    }
    addToCartfromFav() {
        cy.wait(1500)
        cy.get(this.addtoCart).click()
    }
}
export default new Favourites()