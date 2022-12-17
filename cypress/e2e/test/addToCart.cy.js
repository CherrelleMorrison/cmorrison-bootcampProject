import CartPage from "../page/cart.page";
import ProductDetailsPage from "../page/product.details.page";
import ProductHomePage from "../page/product.home.page";

describe('Add to Cart', () => {
  beforeEach(() => {
    cy.visit('/products')
    cy.wait(1500)
  })

  it('Confirm that a product can be added to cart', () => {
    //finds the product and adds to cart; asserts that the cart contains only 1 item
    cy.get(ProductHomePage.hoodedSweatshirt).scrollIntoView().click()
    cy.location('pathname', { timeout: 10000 }).should('eq', '/products/quality-sweatshirt-hooded')
    cy.get(ProductDetailsPage.productName, { timeout: 10000 }).should('exist')
    ProductDetailsPage.addToCart()
    cy.get(CartPage.cartBadge).contains('1')
  })

  it('Confirm that a product can be added to the cart multiple times', () => {
    //finds the product, increase its quantity and adds to cart; asserts that the cart quantity is 2
    cy.get(ProductHomePage.hoodedSweatshirt).scrollIntoView().click()
    cy.location('pathname', { timeout: 10000 }).should('eq', '/products/quality-sweatshirt-hooded')
    cy.get(ProductDetailsPage.productName, { timeout: 10000 }).should('exist')
    cy.get(ProductDetailsPage.increaseQuantity).click()
    ProductDetailsPage.addToCart()
    cy.get(CartPage.cartBadge).contains('2')
  })

  it('Confirm that multiple products can be added to the cart', () => {
    //finds each product and adds them to cart; asserts that the cart quantity is 3
    cy.get(ProductHomePage.hoodedSweatshirt).scrollIntoView().click()
    cy.location('pathname', { timeout: 10000 }).should('eq', '/products/quality-sweatshirt-hooded')
    cy.get(ProductDetailsPage.productName, { timeout: 10000 }).should('exist')
    ProductDetailsPage.addToCart()
    cy.get(CartPage.cartBadge).contains('1')
    cy.get(CartPage.continueShopping).click()
    cy.get(ProductDetailsPage.backNavigation).click()
    cy.get(ProductHomePage.qualityMug).scrollIntoView().click()
    cy.location('pathname', { timeout: 10000 }).should('eq', '/products/quality-mug')
    ProductDetailsPage.addToCart()
    cy.get(CartPage.cartBadge).contains('2')
    cy.get(CartPage.continueShopping).click()
    cy.get(ProductDetailsPage.backNavigation).click()
    cy.get(ProductHomePage.qualityPillow).scrollIntoView().click()
    cy.location('pathname', { timeout: 10000 }).should('eq', '/products/quality-pillow')
    ProductDetailsPage.addToCart()
    cy.get(CartPage.cartBadge).contains('3')
  })
})