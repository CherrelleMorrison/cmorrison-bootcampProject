import ProductHomePage from "../page/product.home.page";

describe('Search', () => {
    beforeEach(() => {
        cy.visit('/products')
        cy.wait(1500)
    })

    it('Confirm that products matching the keyword are displayed', () => {
        cy.get(ProductHomePage.searchBar).type('Quality Trucker Hat')
        //checks each product name/title to ensure that it matches what was entered in the search bar
        cy.get(ProductHomePage.productTitles).each(($elem) => {
            expect($elem.text()).contains('Quality Trucker Hat')
        })
    })

    it('Confirm that user can do a partial keyword search', () => {
        cy.get(ProductHomePage.searchBar).type('shirt')
        //checks each product name/title to ensure that it contains what was entered in the search bar
        cy.get(ProductHomePage.productTitles).each(($elem) => {
            expect($elem.text()).contains('shirt')
        })
    })

    it('Confirm that no product is shown using an invalid keyword', () => {
        cy.get(ProductHomePage.searchBar).type('invalid')
        cy.get(ProductHomePage.productTitles).should('not.exist')
    })
})