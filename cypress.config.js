const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    chromeWebSecurity: false,
    baseUrl: 'https://ui-automation-camp.vercel.app/',
    specPattern: 'cypress/e2e/test/**/*.cy.{js,jsx,ts,tsx}',

    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true
    }

  },
});
