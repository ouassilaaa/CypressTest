describe('Register', () => {
it('insertUser', () => {
    //paramètrage de la page web
    cy.visit('http://localhost/TestCypress/addUser')
    //récupération et saisie dans les inputs
    cy.get(':input[name="nom"]').type('Ouass')
    cy.get(':input[name="prenom"]').type('Toulouse')
    cy.get(':input[name="mail"]').type('test@test.com')
    cy.get('[type="password"]').type('1234')
    //clic sur le bouton submit
    cy.get(':input[name="submit"]').click()
    //test du message d'erreur
    cy.get('#msgzone').should('contain', "Le compte a été ajouté en BDD")
  })
  it('doublonUser', () => {
    cy.visit('http://localhost/TestCypress/addUser')
    cy.get(':input[name="nom"]').type('Ouass')
    cy.get(':input[name="prenom"]').type('Toulouse')
    cy.get(':input[name="mail"]').type('test@test.com')
    cy.get('[type="password"]').type('1234')
    cy.get(':input[name="submit"]').click()
    cy.get('#msgzone').should('contain', "Les informations sont incorrectes")
  })
  it('vide', ()=>{
    cy.visit('http://localhost/TestCypress/addUser')
    cy.get(':input[name="mail"]').type('test@test.com')
    cy.get(':input[name="submit"]').click()
    cy.get('#msgzone').should('contain', "Veuillez remplir tous les champs du formulaire")
  })

})  