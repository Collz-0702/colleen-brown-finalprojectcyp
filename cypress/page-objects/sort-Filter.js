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
        return ('p[class= "chakra-text css-0"]')
    }
    selectSort(sort) {
        cy.get(this.selectSortDropDown).select(sort)
    }
    selectFilter(sort) {
        cy.get(this.selectFilterDropDown).select(sort)
    }

}
export default new Sort()