describe('Mes tests', () => {
  it('lancer le serveur', () => {
    cy.visit('http://localhost/TestCypress/addUser')
    //vérifier la connexion
    cy.get(':input[name="nom"]').type('Ouass')
    cy.get(':input[name="prenom"]').type('Ouass')
    cy.get(':input[name="mail"]').type('Ouass@gmail.com')
    cy.get(':input[name="mdp"]').type('1234')
    cy.get(':input[name="submit"]').click

    //récupérer le contenu de msgzone dans une variable text 
    cy.get('#msgzone').invoke("text").then((text => {
      //on teste la valeur de text
      if(text == 'Veuillez remplir tous les champs du formulaire'){
        console.log('ok')
      }
      //on teste sinon si text à une autre valeur
      else{
        console.log('pas ok')
      }

    }))  

  })
})
