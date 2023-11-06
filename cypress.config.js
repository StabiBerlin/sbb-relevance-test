const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://findex.gbv.de',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
