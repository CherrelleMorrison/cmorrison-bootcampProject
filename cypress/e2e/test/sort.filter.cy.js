import ProductHomePage from "../page/product.home.page"

describe('Sort and Filter', () => {

    beforeEach(() => {
        cy.visit('/products')
        cy.wait(1500)
    })

    it('Confirm that products can be filtered by category', () => {
        //filter products list by shoes
        cy.get(ProductHomePage.categoryFilter).select('shoes')
        //check the product tags to ensure they match the selected catgory
        cy.get(ProductHomePage.productTags).contains('shoes')
    })

    it('Confirm that products can be sorted by name in alphabetical order', () => {
        //sort products list from A-Z product name
        cy.get(ProductHomePage.sortSelect).select('aToZ')
        //get each product name and store it in an array, sort the array and check that the
        //list is sorted based on the indexed position of each name
        let prodList = []
        prodList.sort()
        cy.get(ProductHomePage.productTitles).each(($elem, index) => {
            prodList[index] = ($elem.text())
        }).then(() => {
            cy.get(ProductHomePage.productTitles).each(($elem, index) => {
                expect($elem.text()).equal(prodList[index])
            })
        })
    })

    it('Confirm that products can be sorted by name in reverse alphabetical order', () => {
        //sort products list from Z-A product name
        cy.get(ProductHomePage.sortSelect).select('zToA')
        //get each product name and store it in an array, sort the array and check that the
        //list is sorted based on the indexed position of each name
        let prodList = []
        prodList.sort().reverse()
        cy.get(ProductHomePage.productTitles).each(($elem, index) => {
            prodList[index] = ($elem.text())
        }).then(() => {
            cy.get(ProductHomePage.productTitles).each(($elem, index) => {
                expect($elem.text()).equal(prodList[index])
            })
        })
    })

    it('Confirm that products can be sorted by cost lowest to highest', () => {
        //sort products list from low to high cost
        cy.get(ProductHomePage.sortSelect).select('lowToHigh')
        //get each product price and store it in an array, sort the array and check that the
        //list is sorted based on the indexed position of each price
        let prodList = []
        prodList.sort()
        cy.get(ProductHomePage.productPrices).each(($elem, index) => {
            prodList[index] = parseFloat($elem.text().replace('$', ''))
        }).then(() => {
            cy.get(ProductHomePage.productPrices).each(($elem, index) => {
                expect($elem.text()).equal('$' + prodList[index])
            })
        })
    })

    it('Confirm that products can be sorted by cost highest to lowest', () => {
        //sort products list from high to low cost
        cy.get(ProductHomePage.sortSelect).select('highToLow')
        //get each product price and store it in an array, sort the array and check that the
        //list is sorted based on the indexed position of each price
        let prodList = []
        prodList.sort().reverse()
        cy.get(ProductHomePage.productPrices).each(($elem, index) => {
            prodList[index] = parseFloat($elem.text().replace('$', ''))
        }).then(() => {
            cy.get(ProductHomePage.productPrices).each(($elem, index) => {
                expect($elem.text()).equal('$' + prodList[index])
            })
        })
    })
})