beforeEach(() => {
  cy.env(['FAIL_COUNT']).then((env) => {
    const cacheBust = new Date().getTime()

    cy.request(
      `https://playful-queijadas-ee4e4d.netlify.app/status.json?cacheBust=${cacheBust}`
    ).then((contents) => {
      cy.wrap(contents.body.status).as('status')
      if (env.FAIL_COUNT && !isNaN(env.FAIL_COUNT)) {
        cy.wrap({ failCount: Number(env.FAIL_COUNT), source: 'env' }).as('failCount')
      } else {
        cy.wrap({ failCount: contents.body.failCount, source: 'server' }).as('failCount')
      }
    })
  })
})
