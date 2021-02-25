#Author: kevin.mendes35@gmail.com
@Connexion
Feature: Connexion et Connexion fausse

  Background: 
    Given Ouvrir le navigateur

  @ConnexionN
  Scenario Outline: connexion avec login et mot de passe
    Given Je suis sur le formulaire de connexion
    When je renseigne les champs Nom d_utilisateur avec <username>
    And Mot de passe avec <password>
    And je clique sur le bouton '//*[@id="login-form"]/fieldset/span/input'
    Then je suis connecte sur le systeme "Connecté en tant que "
    Then Je clique sur "Fermer la session"

    Examples: 
      | username | password  |
      | "Kevin"  | "K-istqb" |

  @ConnexionE1
  Scenario Outline: connexion avec login et mot de passe incorrects
    Given Je suis sur le formulaire de connexion de mantis
    When je renseigne le champ Nom d_utilisateur avec <username>
    And le champ Mot de passe avec <password>
    And je clique le bouton "Ouvrir la session"
    Then un message d erreur s affiche "Your account may be disabled or blocked or the username/password you entered is incorrect"

    Examples: 
      | username        | password    |
      | "Adminisgrator" | "password"  |
      | "4lphons3"      | "password"  |
      | "ù£$@"          | "password"  |
      | ""              | "password"  |
      | "Damien"        | ""          |
      | "Elise"         | "pas3sword" |
      | "Francois"      | "password"  |
      | "Gérald"        | "password"  |
      | " Hermann"      | "password"  |
      | "123"           | "Password"  |
