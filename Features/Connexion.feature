#Author: kevin.mendes35@gmail.com
@Connexion
Feature: Connexion et Connexion fausse

  Background: 
    Given Ouvrir le navigateur

  @ConnexionN
  Scenario Outline: connexion avec login et mot de passe V2
    Given Je suis sur le formulaire de connexion sur le site
    When je renseigne les champs Nom d_utilisateur avec <username>
    And je clique sur le bouton de connexion '//*[@id="login-form"]/fieldset/input[2]'
    And Mot de passe avec <password>
    And je clique sur le bouton '//*[@id="login-form"]/fieldset/input[3]'
    Then je suis connecte sur le systeme '//*[@id="breadcrumbs"]/ul/li/a'
    Then Je clique sur mon nom d utilisateur puis sur ' Se déconnecter'

    Examples: 
      | username        | password   |
      | "kevin"         | "K-istqb"  |
      | "Administrator" | "root"     |
      | "Alphonse"      | "password" |
      | "Bertrand"      | "password" |
      | "Charles"       | "password" |
      | "Damien"        | "password" |
      | "Elise"         | "password" |
      | "François"      | "password" |
      | "Gérald"        | "password" |
      | "Hermann"       | "password" |
      | "Isidore"       | "password" |
      | "Julie"         | "password" |
      | "Karl"          | "password" |
      | "Lucie"         | "password" |
      | "Mathieu"       | "password" |
      | "Noémie"        | "password" |
      | "Olivier"       | "password" |

  @ConnexionE1
  Scenario Outline: connexion avec login et mot de passe incorrects
    Given Je suis sur le formulaire de connexion sur le site
    When je renseigne les champs Nom d_utilisateur avec <username>
    And je clique sur le bouton de connexion '//*[@id="login-form"]/fieldset/input[2]'
    But si <username> vaut "", un message d erreur s affiche "Votre compte est peut être désactivé ou alors le code utilisateur et le&nbsp;mot de passe que vous avez saisis sont incorrects."
    And Mot de passe avec <password>
    And je clique sur le bouton '//*[@id="login-form"]/fieldset/input[3]'
    Then un message d erreur s affiche "Votre compte est peut être désactivé ou alors le code utilisateur et le mot de passe que vous avez saisis sont incorrects."

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
