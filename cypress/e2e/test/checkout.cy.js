import BillingPage from "../page/billing.page";
import CartPage from "../page/cart.page";
import ProductDetailsPage from "../page/product.details.page";
import ProductHomePage from "../page/product.home.page";

describe('Checkout', () => {

  beforeEach(() => {
    cy.visit('/products')
    cy.wait(1500)
  })

  it('Confirm that a user cannot checkout with an empty cart', () =>{
    cy.get(ProductHomePage.hoodedSweatshirt).scrollIntoView().click()
    cy.location('pathname', { timeout: 10000 }).should('eq', '/products/quality-sweatshirt-hooded')
    cy.get(ProductDetailsPage.productName, { timeout: 10000 }).should('exist')
    ProductDetailsPage.addToCart()
    cy.wait(1500)
    cy.get(CartPage.cartBadge).contains('1')
    cy.get(CartPage.decreaseQuantity).click()
    cy.get(CartPage.checkoutBtn).should('not.exist')
  })

  it('Confirm that a user cannot continue checkout without required fields', () =>{
    cy.get(ProductHomePage.hoodedSweatshirt).scrollIntoView().click()
    cy.location('pathname', { timeout: 10000 }).should('eq', '/products/quality-sweatshirt-hooded')
    cy.get(ProductDetailsPage.productName, { timeout: 10000 }).should('exist')
    ProductDetailsPage.addToCart()
    cy.get(CartPage.cartBadge).contains('1')
    cy.get(CartPage.checkoutBtn).click()
    cy.get(BillingPage.continuePaymentBtn).click({force: true})
    cy.get(BillingPage.fieldErrorMsg).each(($elem) => {
      expect($elem.text()).contains('This field is required')
  })

  })

  it('Confirm that a user can checkout with a single product', () => {
    cy.get(ProductHomePage.hoodedSweatshirt).scrollIntoView().click()
    cy.location('pathname', { timeout: 10000 }).should('eq', '/products/quality-sweatshirt-hooded')
    cy.get(ProductDetailsPage.productName, { timeout: 10000 }).should('exist')
    ProductDetailsPage.addToCart()
    cy.get(CartPage.cartBadge).contains('1')
    cy.get(CartPage.checkoutBtn).click()
    BillingPage.submitBilling()
    cy.get(BillingPage.continuePaymentBtn).click({force: true})
    cy.wait(3000)
    BillingPage.completePayment()
    cy.get(BillingPage.orderCompleteMsg).should('contain.text', 'Thank you for your order')
  })

  it('Confirm that a user can checkout with multiple products', () => {
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
    cy.get(CartPage.checkoutBtn).click()
    BillingPage.submitBilling()
    cy.get(BillingPage.continuePaymentBtn).click({force: true})
    cy.wait(3000)
    BillingPage.completePayment()
    cy.wait(3000)
    cy.get(BillingPage.orderCompleteMsg).should('contain.text', 'Thank you for your order')
  })
})