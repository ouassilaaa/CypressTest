describe('Vérifier appel API', () => {

it('api', ()=>{
    cy.visit('http://localhost:8080/test')
    const url = "https://www.googleapis.com/books/v1/volumes?q=seigneur"
    cy.request('GET',url).as('requete')

    cy.get('@requete').should((response) => {
      expect(response.status).to.eq(200)
    })
  })
})
