class ContactPage {

    get contactFirstName() {
        return ('#firstName')
    }

    get contactLastName() {
        return ('#lastName')
    }

    get contactEmail() {
        return ('#email')
    }

    get subject() {
        return ('#subject')
    }

    get messageBody() {
        return ('#message')
    }

    get sendMsgBtn() {
        return ('.css-1pdqelo button')
    }

    get successMsg() {
        return ('#toast-1-description')
    }

    get requiredFieldError() {
        return ('.chakra-form__error-message.css-170ki1a')
    }

    get emailErrorMsg() {
        return ('#field-\:r4\:-feedback')
    }
    //methods
    sendMessage(fname, lname, email, subject, body) {
        cy.get(this.contactFirstName).type(fname)
        cy.get(this.contactLastName).type(lname)
        cy.get(this.contactEmail).type(email)
        cy.get(this.subject).type(subject)
        cy.get(this.messageBody).type(body)
        cy.get(this.sendMsgBtn).click()
    }

}
export default new ContactPage()