@Demande
Feature: Formuler une demande

  Background: 
    Given Etre sure la page de connexion
    And Me connecter avec le login "kevin" et le mdp "K-istqb"

  @DemandeN
  Scenario Outline: soumettre une demande
    Given Je clique sur "rapporter une anomnalie"
    When je clique sur le "Choisir un projet"
    And je renseigne le champs <resume>, <description>
    And je clique sur le bouton denvoie "Soumettre l'anomalie"
    Then la demande a le statut "nouveau" dans état.

    Examples: 
      | resume          | description              |
      | "ça marche pas" | "vraiment ça marche pas" | 

  @DemandeE1
  Scenario Outline: soumettre une demande en omettant un champs obligatoire
    Given Je clique sur "rapporter une anomnalie"
    Given Je suis sur l url "http://vps-9851f0e9.vps.ovh.net/mantisbtv2/"
    When je clique sur le "Choisir un projet"
    And je renseigne le champs <resume>, <description>
    And je clique sur le bouton denvoie "Soumettre l'anomalie"
    Then je suis toujours sur l url "http://vps-9851f0e9.vps.ovh.net/mantisbtv2/bug_report_page.php"

    Examples: 
      | resume   | description |
      | ""       | "coucou"    |
      | "coucou" | ""          |
      | ""       | ""          |
