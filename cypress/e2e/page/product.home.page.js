class ProductHomePage {

    get aboutTab() {
        return ('#top-about')
    }

    get contactTab() {
        return ('#top-contact')
    }

    get cartTab() {
        return ('#top-cart')
    }

    get signoutBtn() {
        return ('#top-sign-out')
    }

    get sortSelect() {
        return ('#sort')
    }

    get searchBar() {
        return ('#search')
    }

    get categoryFilter() {
        return ('#category')
    }

    get resetBtn() {
        return ('#reset')
    }

    get productsGrid() {
        return ('div.css-12qzrsi')
    }

    get productPrices() {
        return ('div.chakra-stack.css-1ieohnc > p')
    }

    get productTitles() {
        return ('div.chakra-stack.css-1oeb4ru > p')
    }

    get addToCartBtns() {
        return ('#add-to-cart')
    }

    get productTags() {
        return ('div.chakra-stack.css-1ieohnc')
    }

    get hoodedSweatshirt() {
        return ('img[src="/images/quality-sweatshirt-hooded.jpg"]')
    }

    get qualityMug() {
        return ('img[src="/images/quality-mug.jpg"]')
    }

    get qualityPillow() {
        return ('img[src="/images/quality-pillow.jpg"]')
    }

    get addToFavoritesBtns() {
        return ('#add-to-favorite')
    }

    get removeFromFavoritesBtn() {
        return ('#remove-from-favorite')
    }

    get qualityMugFavoriteBtn() {
        return ('#product-3 div.css-1m8iww1')
    }

    get qualityPillowFavoriteBtn() {
        return ('#product-4 div.css-1m8iww1')
    }

    get hoodedSweatshirtFavoriteBtn() {
        return ('#product-5 div.css-1m8iww1')
    }

    get alertPopUpMsg() {
        return ('.chakra-alert__title.css-tidvy5')
    }

    get closePopUp() {
        return ('button[aria-label="Close"]')
    }

}
export default new ProductHomePage()