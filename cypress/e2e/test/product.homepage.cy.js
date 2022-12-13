import ProductHomePage from "../page/product.home.page";

describe('Product Home Page', () => {

    beforeEach(() => {
      cy.wait(1500)
      cy.visit('/products')
      cy.wait(1500)
    })

    it('Confirm that the list of products is displayed', () =>{
    cy.get(ProductHomePage.productsGrid).should('be.visible')
    cy.get(ProductHomePage.productTitles).should('exist')
    })

    it('Confirm that each product has an add to cart button', () => {
        cy.get(ProductHomePage.addToCartBtns).should('be.visible')
    })

    it('Confirm that each product has a price', () => {
        cy.get(ProductHomePage.productPrices).should('be.visible')
    })

    it('Confirm that each product has a tag', () => {
        cy.get(ProductHomePage.productTags).should('be.visible')
    })

    it('Confirm that filter option is available', () => {
        cy.get(ProductHomePage.categoryFilter).should('exist')
    })

    it('Confirm that search option is available', () => {
        cy.get(ProductHomePage.searchBar).should('be.visible')
    })
})