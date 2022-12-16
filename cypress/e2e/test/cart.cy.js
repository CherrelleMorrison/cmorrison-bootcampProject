import CartPage from "../page/cart.page";
import ProductDetailsPage from "../page/product.details.page";
import ProductHomePage from "../page/product.home.page";

describe('Cart', () => {

  beforeEach(() => {
    cy.wait(1500)
    cy.visit('/products')
    cy.wait(1500)
  })

  it('Confirm that the added product name matches the product name in the cart', () => {
    cy.get(ProductHomePage.hoodedSweatshirt).scrollIntoView().click()
    cy.location('pathname', { timeout: 10000 }).should('eq', '/products/quality-sweatshirt-hooded')
    cy.get(ProductDetailsPage.productName, { timeout: 10000 }).should('exist')
    ProductDetailsPage.addToCart()
    cy.get(CartPage.cartBadge).contains('1')
    cy.get(CartPage.cartItemName).contains('quality hooded sweatshirt', {matchCase: false})
  })

  it('Confirm that a product is removed from the cart when quantity is less than 1', () =>{
    cy.get(ProductHomePage.hoodedSweatshirt).scrollIntoView().click()
    cy.location('pathname', { timeout: 10000 }).should('eq', '/products/quality-sweatshirt-hooded')
    cy.get(ProductDetailsPage.productName, { timeout: 10000 }).should('exist')
    ProductDetailsPage.addToCart()
    cy.get(CartPage.cartBadge).contains('1')
    cy.get(CartPage.decreaseQuantity).click()
    cy.get(CartPage.cartBadge).contains('0')

})

it('Confirm that products remain in cart when user navigates from the cart', () => {
    cy.get(ProductHomePage.hoodedSweatshirt).scrollIntoView().click()
    cy.location('pathname', { timeout: 10000 }).should('eq', '/products/quality-sweatshirt-hooded')
    cy.get(ProductDetailsPage.productName, { timeout: 10000 }).should('exist')
    ProductDetailsPage.addToCart()
    cy.get(CartPage.continueShopping).click()
    cy.get(ProductDetailsPage.backNavigation).click()
    cy.get(ProductHomePage.qualityMug).scrollIntoView().click() 
    cy.location('pathname', { timeout: 10000 }).should('eq', '/products/quality-mug')
    ProductDetailsPage.addToCart()
    cy.get(CartPage.cartBadge).contains('2')
    cy.get(CartPage.continueShopping).click()
    cy.get(ProductDetailsPage.backNavigation).click()
    cy.get(ProductHomePage.cartTab).should('not.be.empty')

})

})