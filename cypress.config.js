const { defineConfig } = require("cypress");


// API https://findex.gbv.de/index/11/
module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://b-dev20220203-vufind-6/Search',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
