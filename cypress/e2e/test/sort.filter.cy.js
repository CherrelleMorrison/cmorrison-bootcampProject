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
        //ProductHomePage.sortListDescendingName()
        
    })

    it('Confirm that products can be sorted by name in reverse alphabetical order', () => {
        //sort products list from A-Z product name
        cy.get(ProductHomePage.sortSelect).select('zToA')
        ProductHomePage.sortListAscendingName()
    })

    it('Confirm that products can be sorted by cost lowest to highest', () => {
        //sort products list from low to high cost
        cy.get(ProductHomePage.sortSelect).select('lowToHigh')
        ProductHomePage.sortCostAscending()
    })

    it('Confirm that products can be sorted by cost highest to lowest', () => {
        //sort products list from high to low cost
        cy.get(ProductHomePage.sortSelect).select('highToLow')
        ProductHomePage.sortCostDescending()
    })

    
})