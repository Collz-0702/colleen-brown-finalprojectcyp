import Authentication from '../page-objects/authentication'
import ProductsData from '../data-files/sortfilter'
import Sort from '../page-objects/sort-Filter'

describe('Sort and Filter', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should sort products from A-Z', () => {
        Authentication.login('colleen1995@gmail.com', 'QUALITYcamp22!')
        // the sort function is called and the data index is used to sort the products from A-Z
        Sort.selectSort(ProductsData.sort['A to Z'])
        ProductsData.products.sort()
        // assert that the products are sorted
        cy.get(Sort.itemName).each(($elem, index) => {
            expect($elem.text()).equal(ProductsData.products[index].name)
        })

    })
    it('should sort products from High to Low', () => {
        Authentication.login('colleen1995@gmail.com', 'QUALITYcamp22!')
        // the sort function is called and the data index is used to sort the products from high to low
        Sort.selectSort(ProductsData.sort['High to Low'])
        ProductsData.products.sort()
        // assert that the prices are sorted
        ProductsData.products.sort((a, b) => b.price - a.price)
        cy.get(Sort.itemPrice).each(($elem, index) => {
            expect($elem.text()).equal(`${ProductsData.products[index].price}`)
            // cy.get(Sort.itemPrice).each(($elem, index) => {
            //     expect($elem.text()).equal(ProductsData.products[index].price)
        })
    })
    it('should filter products by hat category', () => {
        Authentication.login('colleen1995@gmail.com', 'QUALITYcamp22!')
        // filter products by category
        Sort.selectFilter(ProductsData.sort['Hats'])
        ProductsData.products.sort()
        cy.get(Sort.itemCategory).each(($elem, index) => {
            expect($elem.text().trim()).equal(ProductsData.products[index].label)
        })
    })

})