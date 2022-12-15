class BillingPage {

    get inputName() {
        return ('input[id="name_629ad4e3-b325-4d82-bf41-a969172d5ade"]')
    }

    get inputEmail() {
        return ('input[id="email_629ad4e3-b325-4d82-bf41-a969172d5ade"]')
    }

    get inputStreet() {
        return ('.snipcart-form__address-autocomplete>div')
    }

    get inputSuite() {
        return ('input[id="address2_629ad4e3-b325-4d82-bf41-a969172d5ade"]')
    }

    get inputCity() {
        return ('input[id="address1_629ad4e3-b325-4d82-bf41-a969172d5ade"]')
    }

    get selectCountry() {
        return ('input[id="country_629ad4e3-b325-4d82-bf41-a969172d5ade"]')
    }

    get inputProvince() {
        return ('input[id="province_629ad4e3-b325-4d82-bf41-a969172d5ade"]')
    }

    get inputZipcode() {
        return ('input[id="postalCode_629ad4e3-b325-4d82-bf41-a969172d5ade"]')
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
        // cy.get('.snipcart-form__set').first().within(($fieldset) => {
        //     cy.get(this.inputName).type('Cherrelle Morrison')
        //     cy.get(this.inputEmail).type('cmorrison@mail.com')
        //     cy.get(this.inputStreet).type('123 ABC Road')
        //     cy.get(this.inputSuite).type('15A')
        //     cy.get(this.inputCity).type('Kingston')
        //     cy.get(this.selectCountry).type('Jamaica')
        //     cy.get(this.inputProvince).type('St Andrew')
        //     cy.get(this.inputZipcode).type('1876')
        // })
       cy.get('#name_68c4199a-62d8-461e-ab27-5fff9c0f3a93').click().type('Cherrelle Morrison')

    }

    completePayment() {
        cy.iframe('.snipcart-payment-card-form iframe').find('#card-number').type('4242 4242 4242 4242')
        cy.iframe('.snipcart-payment-card-form iframe').find('#expiry-date').type('0525')
        cy.iframe('.snipcart-payment-card-form iframe').find('#cvv').type('123')
        cy.get(this.placeOrderBtn).click()
    }
}
export default new BillingPage()