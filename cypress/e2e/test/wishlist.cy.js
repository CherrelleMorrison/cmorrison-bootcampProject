import ProductDetailsPage from "../page/product.details.page"
import ProductHomePage from "../page/product.home.page"
import WishlistPage from "../page/wishlist.page"

describe('Wishlist', () => {
    beforeEach('Visit the products home page', () =>{
        cy.visit('/products')
        cy.wait(1500)
    })

    it('Confirm that each product has an add to favorite option from the products gallery home page', () =>{
        cy.get(ProductHomePage.addToFavoritesBtns).should('exist')
    })

    it('Confirm that a product can be added to favorites from the products gallery home page', () =>{
        cy.get(ProductHomePage.qualityMugFavoriteBtn, {timeout: 1000}).should('exist')
        cy.get(ProductHomePage.qualityMugFavoriteBtn).click()
        cy.get(ProductHomePage.alertPopUpMsg).should('include.text', 'added to favorites')
        cy.get(WishlistPage.favoritesBadge).should('include.text', '1')
    })

    it('Confirm that multiple products can be added to favorites from the products gallery home page', () =>{
        cy.get(ProductHomePage.qualityMugFavoriteBtn, {timeout: 1000}).should('exist')
        cy.get(ProductHomePage.qualityMugFavoriteBtn).click()
        cy.get(ProductHomePage.alertPopUpMsg).should('include.text', 'added to favorites')
        cy.get(WishlistPage.favoritesBadge).should('include.text', '1')


        cy.get(ProductHomePage.hoodedSweatshirtFavoriteBtn, {timeout: 1000}).should('exist')
        cy.get(ProductHomePage.hoodedSweatshirtFavoriteBtn).click()
        cy.get(ProductHomePage.alertPopUpMsg).should('include.text', 'added to favorites')
        cy.get(WishlistPage.favoritesBadge).should('include.text', '2')


        cy.get(ProductHomePage.qualityPillowFavoriteBtn, {timeout: 1000}).should('exist')
        cy.get(ProductHomePage.qualityPillowFavoriteBtn).click()
        cy.get(ProductHomePage.alertPopUpMsg).should('include.text', 'added to favorites')
        cy.get(WishlistPage.favoritesBadge).should('include.text', '3')

    })

    it('Confirm that a product can be added to favorites from the product details page', () =>{
        cy.get(ProductHomePage.hoodedSweatshirt).scrollIntoView().click()
        cy.location('pathname', { timeout: 40000 }).should('eq', '/products/quality-sweatshirt-hooded')
        cy.get(ProductDetailsPage.productName, { timeout: 10000 }).should('exist')
        cy.get(ProductDetailsPage.addToFavoritesBtn, {timeout: 1000}).should('exist')
        cy.get(ProductDetailsPage.addToFavoritesBtn).click()
        cy.get(ProductDetailsPage.alertPopUpMsg).should('include.text', 'added to favorites')
        cy.get(WishlistPage.favoritesBadge).should('include.text', '1')
    })

    it('Confirm that a product can be removed from favorites from the products gallery home page', () =>{
        cy.get(ProductHomePage.qualityMugFavoriteBtn, {timeout: 1000}).should('exist')
        cy.get(ProductHomePage.qualityMugFavoriteBtn).click()
        cy.get(ProductHomePage.alertPopUpMsg).should('include.text', 'added to favorites')
        cy.get(WishlistPage.favoritesBadge).should('include.text', '1')
        cy.get(ProductHomePage.removeFromFavoritesBtn).click()
        cy.get(ProductHomePage.alertPopUpMsg).should('include.text', 'removed from favorites')
        cy.get(WishlistPage.favoritesBadge).should('include.text', '0')
    })

    it('Confirm that a product can be removed from favorites from the product details page', () =>{
        cy.get(ProductHomePage.hoodedSweatshirt).scrollIntoView().click()
        cy.location('pathname', { timeout: 40000 }).should('eq', '/products/quality-sweatshirt-hooded')
        cy.get(ProductDetailsPage.productName, { timeout: 10000 }).should('exist')
        cy.get(ProductDetailsPage.addToFavoritesBtn, {timeout: 1000}).should('exist')
        cy.get(ProductDetailsPage.addToFavoritesBtn).click()
        cy.get(ProductDetailsPage.alertPopUpMsg).should('include.text', 'added to favorites')
        cy.get(WishlistPage.favoritesBadge).should('include.text', '1')
        cy.get(ProductDetailsPage.removeFromFavoritesBtn).click()
        cy.get(ProductHomePage.alertPopUpMsg).should('include.text', 'removed from favorites')
        cy.get(WishlistPage.favoritesBadge).should('include.text', '0')
    })

    it('Confirm that navigating to another page does not remove the product from the wishlist', () =>{
        cy.get(ProductHomePage.qualityMugFavoriteBtn, {timeout: 1000}).should('exist')
        cy.get(ProductHomePage.qualityMugFavoriteBtn).click()
        cy.get(WishlistPage.favoritesMenuTab).click()
        cy.get(WishlistPage.favoriteProductTitles).should('exist')
        cy.get(WishlistPage.favoriteProductTitles).should('include.text', 'Quality Mug')
        cy.get(ProductHomePage.closePopUp).click()
        cy.get(ProductHomePage.contactTab).click()
        cy.get(WishlistPage.favoritesBadge).should('include.text', '1')
        cy.get(WishlistPage.favoritesMenuTab).click()
        cy.get(WishlistPage.favoriteProductTitles).should('exist')
        cy.get(WishlistPage.favoriteProductTitles).should('include.text', 'Quality Mug')
    })

})