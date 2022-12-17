class CartPage {
    //getters
    get cartCount() {
        return ('div.snipcart-cart-header__options')
    }

    get cartItemName() {
        return ('#snipcart div.snipcart-item-line__header')
    }

    get continueShopping() {
        return ('#snipcart header > button')
    }

    get cartBadge() {
        return ('div.snipcart-cart-header__options')
    }

    get removeItemBtn() {
        return ('div.snipcart-item-line__header > button > svg')
    }

    get decreaseQuantity() {
        return ('div.snipcart-item-quantity__quantity.snipcart__font--std > button:nth-child(1)')
    }

    get checkoutBtn() {
        return ('.snipcart-cart__footer button')
    }

    get cartItemPrice() {
        return ('.snipcart-item-quantity__total-price')
    }
}
export default new CartPage()