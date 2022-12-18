class Sort {
    get selectSortDropDown() {
        return ('#sort')
    }
    get selectFilterDropDown() {
        return ('#category')
    }
    get itemCategory() {
        return ('span[class= "css-1ccau2i"]')
    }
    get itemName() {
        return ('p[class= "chakra-text css-1n64n71"]')
    }
    get itemPrice() {
        return ('.css-n21gh5 > .css-46p1lt > .css-1ieohnc > .chakra-text')
    }
    selectSort(sort) {
        cy.get(this.selectSortDropDown).select(sort)
    }
    selectFilter(sort) {
        cy.get(this.selectFilterDropDown).select(sort)
    }

}
export default new Sort()