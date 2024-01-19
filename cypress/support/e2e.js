// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// cypress/support/index.js
// if you want to use the "import" keyword
// note: `./index.d.ts` currently extends the global Cypress types and
// does not define `registerCypressGrep` so the import path is directly
// pointed to the `support.js` file
import registerCypressGrep from '@cypress/grep/src/support'
registerCypressGrep()


// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('parentElement')) {
        return false
    }
}) 

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('IOMm is not defined')) {
        return false
    }
}) 
