package TestCase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;

import Utilities.GlobalVariable;
import static Utilities.GlobalVariable.checkXpath;
import static Utilities.GlobalVariable.waitFor;
import Utilities.SetUp;

public class Connexion {

	private static String browser = "Chrome";
	public WebDriver driver = SetUp.SetDriverUp(browser);

	@Given("Ouvrir le navigateur")
	public void ouvrir_le_navigateur() {
		assertEquals(driver != null, true);

	}

	@Given("Je suis sur le formulaire de connexion sur le site")
	public void je_suis_sur_le_formulaire_de_connexion_sur_le_site() {
		String ActualURL = driver.getCurrentUrl();
		assertEquals(ActualURL.contains(GlobalVariable.URL), true);

	}

	@When("je renseigne les champs Nom d_utilisateur avec {string}")
	public void je_renseigne_les_champs_Nom_d_utilisateur_avec(String login) {
		try {
			waitFor(driver).until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id=\"username\"]")));
		} catch (TimeoutException e) {
			// Do not stop the test, continue and see what happens
			assertFalse("Timed out" + e, true);
		}
		WebElement loginInput = driver.findElement(By.xpath("//*[@id=\"username\"]"));
		loginInput.clear();
		loginInput.sendKeys(login);
	}

	@When("je clique sur le bouton de connexion {string}")
	public void je_clique_sur_le_bouton_de_connexion(String bouton) {
		try {
			waitFor(driver).until(ExpectedConditions.presenceOfElementLocated(By.xpath(bouton)));
		} catch (TimeoutException e) {
			// Do not stop the test, continue and see what happens
			assertFalse("Timed out" + e, true);
		}
		driver.findElement(By.xpath(bouton)).click();
	}

	@When("Mot de passe avec {string}")
	public void mot_de_passe_avec(String psd) {
		try {
			waitFor(driver).until(ExpectedConditions.presenceOfElementLocated(By.id("password")));
		} catch (TimeoutException e) {
			// Do not stop the test, continue and see what happens
			assertFalse("Timed out" + e, true);
		}
		WebElement psdInput = driver.findElement(By.id("password"));
		psdInput.clear();
		psdInput.sendKeys(psd);
	}

	@When("je clique sur le bouton {string}")
	public void je_clique_sur_le_bouton(String bouton) {
		try {
			waitFor(driver).until(ExpectedConditions.presenceOfElementLocated(By.xpath(bouton)));
		} catch (TimeoutException e) {
			// Do not stop the test, continue and see what happens
			assertFalse("Timed out" + e, true);
		}
		driver.findElement(By.xpath(bouton)).click();
	}

	@Then("je suis connecte sur le systeme {string}")
	public void je_suis_connecte_sur_le_systeme(String check) {
		checkXpath(driver, check);
	}

	@Then("Je clique sur mon nom d utilisateur puis sur {string}")
	public void je_clique_sur_mon_nom_d_utilisateur_puis_sur(String dc) {
		try {
			waitFor(driver).until(ExpectedConditions.presenceOfElementLocated(By.className("user-info")));
		} catch (TimeoutException e) {
			// Do not stop the test, continue and see what happens
			assertFalse("Timed out" + e, true);
		}
		driver.findElement(By.className("user-info")).click();
		try {
			driver.findElement(By.xpath("//*[@href=\"/mantisbtv2/logout_page.php\"]")).click();
		} catch (NoSuchElementException e) {
			driver.get(GlobalVariable.URL + "logout_page.php");
			assertFalse("Pas déconnecté" + e, true);
		}
	}

	@When("si {string} vaut {string}, un message d erreur s affiche {string}")
	public void si_vaut_un_message_d_erreur_s_affiche(String login, String empty, String error) {
		if (login == "") {
			try {
				String text = driver.findElement(By.xpath("//*[@id=\"main-container\"]/div/div/div/div/div[4]/p")) // ICI
						.getText();
				assertEquals(text, error);
			} catch (NoSuchElementException e) {
				driver.get(GlobalVariable.URL + "logout_page.php");
				assertFalse("Pas de message d'erreur" + e, true);
			}
		}
	}

	@Then("un message d erreur s affiche {string}")
	public void un_message_d_erreur_s_affiche(String error) {
		try {
			String text = driver.findElement(By.xpath("//*[@id=\"main-container\"]/div/div/div/div/div[4]/p"))
					.getText();
			assertEquals(text, error);
		} catch (NoSuchElementException e) {
			driver.get(GlobalVariable.URL + "logout_page.php");
			assertFalse("Pas de message d'erreur" + e, true);
		}
	}

}
