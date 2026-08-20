const FAIL_WHEN_FAIL_COUNT = 5

it(`#${FAIL_WHEN_FAIL_COUNT} - passes`, () => {
  cy.visit('/cypress/fixtures/test.html')
  cy.get('#button-1').click()
})

it(`#${FAIL_WHEN_FAIL_COUNT} - passes or fails based on fail count`, () => {
  cy.get('@failCount').then(({ failCount, source }) => {
    if (failCount >= FAIL_WHEN_FAIL_COUNT) {
      throw new Error(
        `This test purposefully fails because fail count is ${failCount} from ${source}`
      )
    }
    cy.log(`passes because fail count is: ${failCount} from ${source}`)
  })
})

it(`#${FAIL_WHEN_FAIL_COUNT} - passes or fails based on status`, () => {
  cy.get('@status').then((status) => {
    if (status === 'fail') {
      throw new Error(
        `This test purposefully fails because status is: ${status}`
      )
    }
    cy.log(`passes because status is: ${status}`)
  })
})
