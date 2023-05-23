<?php
    namespace App\Model;
    use App\Utils\BddConnect;
    class Connexion extends BddConnect{
        /*--------------------------------
                    Attributs
        --------------------------------*/
        private ?string $mail;
        private ?string $mdp;
        /*--------------------------------
                Getters and Setters
        --------------------------------*/
        
        public function getMail():?string{
            return $this->mail;
        }
        public function setMail(string $mail):self{
            $this->mail = $mail;
            return $this;
        }
        public function getPassword():?string{
            return $this->mdp;
        }
        public function setPassword(string $mdp):self{
            $this->mdp = $mdp;
            return $this;
        }
        /*--------------------------------
                    Méthodes
        --------------------------------*/
        public function addUser():void{
            try{
                
                $mail = $this->mail;
                $mdp = $this->mdp;
                $req = $this->connexion()->prepare('INSERT INTO utilisateur(mail, mdp)
                VALUES(?,?)');
                $req->bindParam(1, $mail, \PDO::PARAM_STR);
                $req->bindParam(2, $mdp, \PDO::PARAM_STR);
                $req->execute();
            } 
            catch (\Exception $e){
                die('Error : '.$e->getMessage());
            }
        }
        public function getUserByMail():?array{
            try{
                $mail = $this->mail;
                $req = $this->connexion()->prepare('SELECT id, mail, mdp FROM utilisateur
                WHERE mail = ?');
                $req->bindParam(1, $mail, \PDO::PARAM_STR);
                $req->execute();
                $data = $req->fetchAll(\PDO::FETCH_OBJ);
                return $data;
            } 
            catch (\Exception $e){
                die('Error : '.$e->getMessage());
            }
        }
        public function __toString(){
            return $this->mail;
        }
    }
?>