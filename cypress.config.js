const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout:40000,
    pageLoadTimeout :60000,
    "chromeWebSecurity": false,
    // experimentalSessionAndOrigin:true,
    // experimentalModifyObstructiveThirdPartyCode:true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
