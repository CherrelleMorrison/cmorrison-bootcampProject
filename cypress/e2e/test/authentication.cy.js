import AuthPage from '../page/auth.page';

describe('Authentication', () => {
  beforeEach(() => {
    cy.visit("https://ui-automation-camp.vercel.app/");
    cy.get("#signInOrRegister").click();
  })

  it("Confirm that user can sign up", () => {

    cy.origin(
      "https://dev-mlluudmotpwoldtv.us.auth0.com",
      { args: {} },
      ({ }) => {
        cy.get('div.auth0-lock-tabs-container > ul > li:nth-child(2) > a').click()
        cy.get('#1-email').type('ctest5@gmail.com')
        cy.get('#1-password').type('Abcd1234', { log: false })
        cy.get('#1-submit').click()
      }
    );
  });

  it("Confirm that user cannot sign up with an already registered email", () => {

    cy.origin(
      "https://dev-mlluudmotpwoldtv.us.auth0.com",
      { args: {} },
      ({ }) => {
        cy.get('div.auth0-lock-tabs-container > ul > li:nth-child(2) > a').click()
        cy.get('#1-email').type('testtest1@gmail.com')
        cy.get('#1-password').type('Abcd1234', { log: false })
        cy.get('#1-submit').click()
      }
    );
    cy.get(AuthPage.errorMsg).contains('something went wrong', { matchCase: false })
  });

  it('Confirm that user cannot sign in with invalid credentials', () => {
    cy.origin(
      "https://dev-mlluudmotpwoldtv.us.auth0.com",
      { args: {} },
      ({ }) => {
        cy.get('[type="email"]').type("invalidcred@gmail.com");
        cy.get('[type="password"]').type("Abcd1234", { log: false });
        cy.get("[name=submit]").click();
      }
    );
    cy.get(AuthPage.errorMsg).contains('wrong email or password', { matchCase: false })
  });

  it("Confirm that user can sign in with valid credentials", () => {
    cy.origin(
      "https://dev-mlluudmotpwoldtv.us.auth0.com",
      { args: {} },
      ({ }) => {
        cy.get('[type="email"]').type("cmorrison@gmail.com");
        cy.get('[type="password"]').type("Abcd1234", { log: false });
        cy.get("[name=submit]").click();
      }
    );
    //checks that the user is redirected to the products page after a successful login
    cy.url().should('contain', 'products')
  });

})