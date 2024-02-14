const { defineConfig } = require("cypress");


// API https://findex.gbv.de/index/11/
module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://stabikat-ranking1/Search',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
