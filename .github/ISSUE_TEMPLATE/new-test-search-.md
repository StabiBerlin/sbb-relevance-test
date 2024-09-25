---
name: 'New test search '
about: Draft a new search to be added to the tests
title: ''
labels: ''
assignees: ''

---

```js
describe('YOUR_DESCRIPTION', () => {
        beforeEach(() => {
            cy.visit({
                url: '/Results',
                qs: {
                    lookfor: 'THE_SEARCH_STRING',
                    type: 'allFields'
                }
            })
        })

        // see #ISSUE_NUMBER
        it('should find title', () => {
            cy.get('[href*="PPN"]')
                .should('exist')
        })
    })
```
