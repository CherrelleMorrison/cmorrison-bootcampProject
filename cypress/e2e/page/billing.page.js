class BillingPage {

    get inputName() {
        return ('input[name="name"]')
    }

    get inputEmail() {
        return ('input[name="email"]')
    }

    get inputStreet() {
        return ('.snipcart-form__address-autocomplete>label+div')
    }

    get inputSuite() {
        return ('input[name="address2"]')
    }

    get inputCity() {
        return ('input[name="city"]')
    }

    get selectCountry() {
        return ('select[name="country"]')
    }

    get inputProvince() {
        return ('select[name="province"]')
    }

    get inputZipcode() {
        return ('input[name="postalCode"]')
    }

    get continuePaymentBtn() {
        return ('#snipcart-billing-form > div > div.snipcart-form__footer > button')
    }

    get itemPrice() {
        return ('span.snipcart-cart-summary-item__price.snipcart__font--slim')
    }

    get summaryTotal() {
        return ('span.snipcart-summary-fees__amount.snipcart-summary-fees__amount--highlight.snipcart__font--large')
    }

    get inputCardNum() {
        return ('#card-number')
    }

    get cardExpiry() {
        return ('#expiry-date')
    }

    get cardCVV() {
        return ('#cvv')
    }

    get placeOrderBtn() {
        return ('#snipcart-checkout-step-payment button')
    }

    get orderCompleteMsg() {
        return ('div.snipcart__box.snipcart-order__box.snipcart-order__box__header')
    }

    get fieldErrorMsg() {
        return ('[data-for="email"]')
    }

    submitBilling() {
        cy.get(this.inputName).type('Cherrelle Morrison')
        cy.get(this.inputEmail).type('cmorrison@mail.com')
        cy.get(this.inputStreet).type('123 ABC Road')
        cy.get(this.inputSuite).type('15A')
        cy.get(this.inputCity).type('Kingston')
        cy.get(this.selectCountry).select('CA')
        cy.get(this.inputProvince).select('SK')
        cy.get(this.inputZipcode).type('S6H 7X6')
    }

    completePayment() {
        cy.iframe('.snipcart-payment-card-form iframe').find('#card-number').type('4242 4242 4242 4242')
        cy.iframe('.snipcart-payment-card-form iframe').find('#expiry-date').type('0525')
        cy.iframe('.snipcart-payment-card-form iframe').find('#cvv').type('123')
        cy.get(this.placeOrderBtn).click()
    }
}
export default new BillingPage()