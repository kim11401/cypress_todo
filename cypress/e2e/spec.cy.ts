describe('My First Test', () => {
  beforeEach(() => {
    // reset and seed the database prior to every test
    cy.exec('npm run start')
  })

  it('Visits the Kitchen Sink', () => {
    cy.visit('/')
  })
})
