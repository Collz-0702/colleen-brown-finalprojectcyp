class Search {
    get searchIcon() {
        return ('#search')
    }
    get searchProductPage() {
        return ('.css-12qzrsi')
    }
    get searchHats() {
        return ('p[class= "chakra-text css-1n64n71"]')
    }
    searchItem(item) {
        cy.get(this.searchIcon).type(item)
    }

}
export default new Search()