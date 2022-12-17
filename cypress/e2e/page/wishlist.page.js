class WishListPage {

    //getters
    get favoritesMenuTab() {
        return ('#top-favorite')
    }

    get favoritesBadge() {
        return ('#top-favorite p')
    }

    get hoodedSweatShirtCartBtn() {
        return ('button[data-item-id="quality-sweatshirt-hooded"]')
    }

    get favoriteProductTitles() {
        return ('div.chakra-stack.css-1oeb4ru > p')
    }


    //methods

}
export default new WishListPage()