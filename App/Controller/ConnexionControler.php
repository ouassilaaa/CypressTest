<?php
    namespace App\Controller;
    use App\Utils\Fonctions;
    use App\Model\Utilisateur;

    class ConnexionController extends Utilisateur {

        public function connectUser(){

            $msg = "";

            //Test si le formulaire à été submit
            if(isset($_POST['submit'])){
                //nettoyage des datas du formulaire
                $mail = Fonctions::cleanInput($_POST['mail']);
                $mdp = Fonctions::cleanInput($_POST['mdp']);
                
                //Test si tous les champs du formulaire sont remplis
                if(!empty($mail) AND !empty($mdp)){
                    $this->setMail($mail);
                    //Récupération du compte
                    $user = $this->getUserByMail();

                    //Test si le compte existe en BDD
                    if(!$user){
                        //Set des valeurs et hash du mot de passe
                        $this->setPassword(password_hash($mdp, PASSWORD_DEFAULT));
                        $msg = "Connecté";
                    }

                    //Test si mdp est correct
                    else{
                        $msg = "Information de connexion incorrecte";
                    }
                }
                //vérifie si les champs sont remplis
                else{
                    $msg = "Veuillez remplir les champs de connexion";
                }
            }

            //Import de la vue 
            include './App/Vue/vueConnexion.php';

        }

    }




?>