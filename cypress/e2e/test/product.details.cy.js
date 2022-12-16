
import ProductDetailsPage from "../page/product.details.page";
import ProductHomePage from "../page/product.home.page";

describe('Product Details', () => {

    beforeEach(() => {
      cy.visit('/products')
      cy.wait(1500)
    })

    it('Confirm that clicking the product from the list redirects to the details page', () => {
      cy.get(ProductHomePage.hoodedSweatshirt).scrollIntoView().click()
      cy.location('pathname', { timeout: 40000 }).should('eq', '/products/quality-sweatshirt-hooded')      
      cy.get(ProductDetailsPage.productName, {timeout:10000}).should('exist')
       cy.get(ProductDetailsPage.addToCartBtn).should('exist')
    })

    it('Confirm that the product name is displayed', () => {
      cy.get(ProductHomePage.hoodedSweatshirt).scrollIntoView().click()
      cy.location('pathname', { timeout: 40000 }).should('eq', '/products/quality-sweatshirt-hooded')      
      cy.get(ProductDetailsPage.productName, {timeout:10000}).should('exist')
      cy.get(ProductDetailsPage.productName).should('include.text', 'Quality Hooded Sweatshirt')
    })

    it('Confirm that add to cart option is available', () => {
      cy.get(ProductHomePage.hoodedSweatshirt).scrollIntoView().click()
      cy.location('pathname', { timeout: 40000 }).should('contains', '/products/quality-sweatshirt-hooded')      
       cy.get(ProductDetailsPage.addToCartBtn).should('be.visible')
    })
})