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

    sortListDescendingName() {
        let prodList = []
        prodList.sort().reverse()
        cy.get(this.productTitles).each(($elem, index) => {
            prodList[index] = ($elem.text())
        }).then(() => {
            cy.get(this.productTitles).each(($elem, index) => {
                expect($elem.text()).equal(prodList[index])
            })
        })

    }

    sortListAscendingName() {
        let prodList = []
        prodList.sort()
        cy.get(this.productTitles).each(($elem, index) => {
            prodList[index] = ($elem.text())
        }).then(() => {
            cy.get(this.productTitles).each(($elem, index) => {
                expect($elem.text()).equal(prodList[index])
            })
        })

    }

    sortCostAscending() {
        let prodList = []
        prodList.sort()
        cy.get(this.productPrices).each(($elem, index) => {
            prodList[index] = parseFloat($elem.text().replace('$', ''))
        }).then(() => {
            cy.get(this.productPrices).each(($elem, index) => {
                expect($elem.text()).equal('$' + prodList[index])
            })
        })

    }

    sortCostDescending() {
        let prodList = []
        prodList.sort().reverse()
        cy.get(this.productPrices).each(($elem, index) => {
            prodList[index] = parseFloat($elem.text().replace('$', ''))
        }).then(() => {
            cy.get(this.productPrices).each(($elem, index) => {
                expect($elem.text()).equal('$' + prodList[index])
            })
        })

    }
}
export default new ProductHomePage()