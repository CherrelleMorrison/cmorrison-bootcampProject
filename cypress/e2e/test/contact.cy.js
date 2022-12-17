import ContactPage from "../page/contact.page"

describe('Contact Form', () => {
    beforeEach(() => {
        cy.visit('/contact')
    })

    it('Confirm that a message cannot be sent with incomplete fields', () => {
        cy.get(ContactPage.sendMsgBtn).click()
        cy.get(ContactPage.requiredFieldError).should('be.visible')
        //check that the error message returned for each empty field matches the expected message
        cy.get(ContactPage.requiredFieldError).each(($elem) => {
            expect($elem.text()).contains('Field is required!')
        })
    })

    it('Confirm that a valid email is required to send a message', () => {
        ContactPage.incompleteForm('john', 'doe', 'invalidemail', 'test', 'test email error message')
        cy.get(ContactPage.requiredFieldError).should('include.text', 'Email is invalid')
    })

    it('Confirm that a message can be sent successfully', () => {
        ContactPage.sendMessage()
        cy.get(ContactPage.successMsg).should('include.text', 'Your message has been sent!')
    })
})