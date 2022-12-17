class AuthPage {
    //getters for signup elements

    get signup() {
        return ('#signInOrRegister')
    }

    get signupTab() {
        return ('div.auth0-lock-tabs-container > ul > li:nth-child(2) > a')
    }

    get emailInput() {
        return ('#1-email')
    }

    get passwordInput() {
        return ('1-password')
    }

    get signupBtn() {
        return ('1-submit')
    }

    get errorMsg() {
        return ('div.auth0-global-message.auth0-global-message-error')
    }

    //method

    signup(email, password) {
        cy.get(this.signupTab).click()
        cy.get(this.emailInput).setValue(email)
        cy.get(this.passwordInput).setValue(password)
        cy.get(this.signupBtn).click()
    }

}

export default new AuthPage()