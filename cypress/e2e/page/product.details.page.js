class ProductDetailPage {
    //getters
    get productName() {
        return ('.chakra-container h2:nth-child(1)')
    }

    get addToCartBtn() {
        return ('#add-to-cart')
    }

    get productDescriptionBlock() {
        return ('.chakra-stack.css-egoftb')
    }

    get increaseQuantity() {
        return ('#product-increase > svg')
    }

    get backNavigation() {
        return ('div.chakra-stack.css-dpkrn2')
    }
    //method
    addToCart() {
        cy.get(this.addToCartBtn).scrollIntoView()
        cy.wait(1500)
        cy.get(this.addToCartBtn).should('be.visible').click()
    }
}
export default new ProductDetailPage()