describe('Connexion', () => {
    it('connectUser', () => {
        //url du test
        const url= 'http://localhost/TestCypress/Connexion'
        //nom du test
        const name= 'Connexion'

        //paramètrage de la page web
        cy.visit('http://localhost/TestCypress/Connexion')
        //récupération et saisie dans les inputs
        cy.get(':input[name="mail"]').type('test@test.com')
        cy.get('[type="password"]').type('1234')

        //clic sur le bouton submit
        cy.get(':input[name="submit"]').click()
        cy.get('#msgzone').invoke("text").then(text=>{
        //test du message de connexion ok
        if(text=="Connecté"){
        }
        //test du message autre erreur
        else{
          valid = true;
        }
        // else { 
        //     valid= false;
        // }
        const json = JSON.stringify({name:name, valid:valid, date:date})
            //Requête API 
            cy.request({
              method: 'POST',
              url: url, 
              body: json,
            })
            
          })
      
      it('incorrect', ()=>{
        cy.visit('http://localhost/TestCypress/Connexion')
        cy.get(':input[name="mail"]').type('test@test.com')
        cy.get(':input[name="submit"]').click()
        cy.get('#msgzone').invoke("text").then(text=>{

        //test du message des informations sont incorrectes
        if(text=="Les informations sont incorrectes"){
        }
        //test du message autre erreur
        else{
          valid = false;
        }})

        const json = JSON.stringify({name:name, valid:valid, date:date})
            //Requête API 
            cy.request({
              method: 'POST',
              url: url, 
              body: json,
    })
})

})
})