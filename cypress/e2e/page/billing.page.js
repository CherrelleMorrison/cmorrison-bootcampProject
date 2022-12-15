class BillingPage {

    get inputName() {
        return ('#name_daecf04c-87c4-4fb3-83fb-b19b226894c6')
    }

    get inputEmail() {
        return ('#email_bca0a9c6-5605-428c-a86b-51db74b5f82c')
    }

    get inputStreet() {
        return ('.snipcart-form__address-autocomplete>div')
    }

    get inputSuite() {
        return ('#address2_108ce1e0-13ee-41dd-a0e7-c8b536877800')
    }

    get inputCity() {
        return ('#city_108ce1e0-13ee-41dd-a0e7-c8b536877800')
    }

    get selectCountry() {
        return ('#country_108ce1e0-13ee-41dd-a0e7-c8b536877800')
    }

    get inputProvince() {
        return ('#province_108ce1e0-13ee-41dd-a0e7-c8b536877800')
    }

    get inputZipcode() {
        return ('#postalCode_108ce1e0-13ee-41dd-a0e7-c8b536877800')
    }

    get continuePaymentBtn() {
        return ('div.snipcart-form__footer > button')
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

    submitBilling() {
        cy.get(this.inputName).type('Cherrelle Morrison')
        cy.get(this.inputEmail).type('cmorrison@mail.com')
        cy.get(this.inputStreet).type('123 ABC Road')
        cy.get(this.inputSuite).type('15A')
        cy.get(this.inputCity).type('Kingston')
        cy.get(this.selectCountry).type('Jamaica')
        cy.get(this.inputProvince).type('St Andrew')
        cy.get(this.inputZipcode).type('1876')
    }

    completePayment() {
        cy.iframe('.snipcart-payment-card-form iframe').find('#card-number').type('4242 4242 4242 4242')
        cy.iframe('.snipcart-payment-card-form iframe').find('#expiry-date').type('0525')
        cy.iframe('.snipcart-payment-card-form iframe').find('#cvv').type('123')
        cy.get(this.placeOrderBtn).click()
    }
}
export default new BillingPage()