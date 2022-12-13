class ProductHomePage{

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
    return ('div.chakra-stack.css-1ieohnc')
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

}
export default new ProductHomePage()