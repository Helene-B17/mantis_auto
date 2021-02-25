package TestCase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import Utilities.SetUp;
import cucumber.api.java.en.And;
import cucumber.api.java.en.But;

public class Connexion {
	
	private static String browser = "Chrome";
	public WebDriver driver = SetUp.SetDriverUp(browser);
	@Given("Ouvrir le navigateur")
	public void ouvrir_le_navigateur() {
		// Done in constructor
	}

	@Given("Je suis sur le formulaire de connexion")
	public void je_suis_sur_le_formulaire_de_connexion() {

	}

	@When("je renseigne les champs Nom d_utilisateur avec {string}")
	public void je_renseigne_les_champs_Nom_d_utilisateur_avec(String login) {
	    WebElement loginInput = driver.findElement(By.xpath("//*[@id=\"username\"]"));
	   
	    loginInput.clear();
	    loginInput.sendKeys(login);
	}

	@When("Mot de passe avec {string}")
	public void mot_de_passe_avec(String psd) {
		WebElement psdInput = driver.findElement(By.xpath("//*[@id=\"password\"]"));
	    psdInput.clear();
	    psdInput.sendKeys(psd);
	}

	@When("je clique sur le bouton {string}")
	public void je_clique_sur_le_bouton(String connexion) {
	    driver.findElement(By.xpath("//*[@id=\"login-form\"]/fieldset/span/input")).click();
	}

	@Then("je suis connecte sur le systeme {string}")
	public void je_suis_connecte_sur_le_systeme(String message) {
	    String value = driver.findElement(By.xpath("//*[@id=\"logged-in-label\"]")).getText();
	    assertEquals(value, message);
	}
	
	@Then("Je clique sur {string}")
	public void je_clique_sur(String close) {
		driver.findElement(By.linkText(close)).click();
	}

	@Given("Je suis sur le formulaire de connexion de mantis")
	public void je_suis_sur_le_formulaire_de_connexion_de_mantis() {
	    // Write code here that turns the phrase above into concrete actions
	}

	@When("je renseigne le champ Nom d_utilisateur avec {string}")
	public void je_renseigne_le_champ_Nom_d_utilisateur_avec(String login) {
	    // Write code here that turns the phrase above into concrete actions
		WebElement loginInput = driver.findElement(By.xpath("//*[@id=\"username\"]"));
	    loginInput.clear();
	    loginInput.sendKeys(login);
	}

	@When("le champ Mot de passe avec {string}")
	public void le_champ_Mot_de_passe_avec(String psd) {
		WebElement psdInput = driver.findElement(By.xpath("//*[@id=\"password\"]"));
	    psdInput.clear();
	    psdInput.sendKeys(psd);
	}

	@When("je clique le bouton {string}")
	public void je_clique_le_bouton(String connexion) {
		driver.findElement(By.xpath("//*[@id=\"login-form\"]/fieldset/span/input")).click();
	}

	@Then("un message d erreur s affiche {string}")
	public void un_message_d_erreur_s_affiche(String error) {
	    String errorGet = driver.findElement(By.xpath("//*[@id=\"mantis\"]/div[2]/ul/li")).getText();
	    System.out.println(errorGet);
	}


}
