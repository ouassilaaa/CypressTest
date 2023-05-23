describe('Mes tests', () => {
  it('lancer le serveur', () => {
    cy.visit('http://localhost/TestCypress/addUser')
    //vérifier la connexion
    cy.get(':input[name="nom"]').type('Ouass')
    cy.get(':input[name="prenom"]').type('Ouass')
    cy.get(':input[name="mail"]').type('Ouass@gmail.com')
    cy.get(':input[name="password"]').type('1234')
    cy.get(':input[name="submit"]').click

    //vérifier un message en sortie
    cy.get('#msgzone').should('contain', 'Les informations sont incorrectes')

  })
})
