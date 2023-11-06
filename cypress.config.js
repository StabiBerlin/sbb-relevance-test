const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://findex.gbv.de/index/11',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
