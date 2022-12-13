//import CartPage from "../page/cart.page";
import ProductDetailsPage from "../page/product.details.page";
import ProductHomePage from "../page/product.home.page";

describe('Add to Cart', () => {

  beforeEach(() => {
    cy.wait(1500)
    cy.visit('/products')
    cy.wait(1500)
  })

  it('Confirm that a product can be added to cart', () => {
    cy.get(ProductHomePage.hoodedSweatshirt).scrollIntoView().click()
    cy.location('pathname', { timeout: 10000 }).should('eq', '/products/quality-sweatshirt-hooded')
    cy.get(ProductDetailsPage.productName, { timeout: 10000 }).should('exist')
    ProductDetailsPage.addToCart()
    cy.get('div.snipcart-cart-header__options').contains('1')
  })

  it('Confirm that a product can be added to the cart multiple times', () => {
    cy.get(ProductHomePage.hoodedSweatshirt).scrollIntoView().click()
    cy.location('pathname', { timeout: 10000 }).should('eq', '/products/quality-sweatshirt-hooded')
    cy.get(ProductDetailsPage.productName, { timeout: 10000 }).should('exist')
    cy.get(ProductDetailsPage.increaseQuantity).click()
    ProductDetailsPage.addToCart()
    cy.get('div.snipcart-cart-header__options').contains('2')
  })

  it.only('Confirm that multiple products can be added to the cart', () => {
    cy.get(ProductHomePage.hoodedSweatshirt).scrollIntoView().click()
    cy.location('pathname', { timeout: 10000 }).should('eq', '/products/quality-sweatshirt-hooded')
    cy.get(ProductDetailsPage.productName, { timeout: 10000 }).should('exist')
    ProductDetailsPage.addToCart()
    cy.get('div.snipcart-cart-header__options').contains('1')
    cy.get(ProductDetailsPage.continueShopping).click()
    cy.get(ProductDetailsPage.backNavigation).click()
    cy.get(ProductHomePage.qualityMug).scrollIntoView().click() 
    cy.location('pathname', { timeout: 10000 }).should('eq', '/products/quality-mug')
    ProductDetailsPage.addToCart()
    cy.get('div.snipcart-cart-header__options').contains('2')
    cy.get(ProductDetailsPage.continueShopping).click()
    cy.get(ProductDetailsPage.backNavigation).click()
    cy.get(ProductHomePage.qualityPillow).scrollIntoView().click() 
    cy.location('pathname', { timeout: 10000 }).should('eq', '/products/quality-pillow')
    ProductDetailsPage.addToCart()
    cy.get('div.snipcart-cart-header__options').contains('3')
  })
})