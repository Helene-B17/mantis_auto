package TestCase;

import static Utilities.GlobalVariable.waitFor;
import static org.junit.Assert.*;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;

import Utilities.GlobalVariable;
import Utilities.SetUp;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Demande {

	private static String browser = "Chrome";
	public WebDriver driver = SetUp.SetDriverUp(browser);

	@Given("Etre sure la page de connexion")
	public void etre_sure_la_page_de_connexion() {
		driver.get(GlobalVariable.URL);
	}

	@Given("Me connecter avec le login {string} et le mdp {string}")
	public void me_connecter_avec_le_login_et_le_mdp(String login, String psd) {
		try {
			driver.findElement(By.xpath("//*[@id=\"breadcrumbs\"]/ul/li/a"));
			driver.findElement(By.xpath("//*[@id=\"dropdown_projects_menu\"]/a")).click();
			driver.findElement(By.xpath("//*[@id=\"projects-list\"]/li[3]/div/ul/li[1]/a")).click();
			
		} catch (NoSuchElementException e) {

			try {
				waitFor(driver).until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id=\"username\"]")));
			} catch (TimeoutException f) {
				// Do not stop the test, continue and see what happens
				assertFalse("Timed out" + f, true);
			}
			WebElement loginInput = driver.findElement(By.xpath("//*[@id=\"username\"]"));
			loginInput.clear();
			loginInput.sendKeys(login);
			try {
				waitFor(driver).until(ExpectedConditions
						.presenceOfElementLocated(By.xpath("//*[@id=\"login-form\"]/fieldset/input[2]")));
			} catch (TimeoutException f) {
				// Do not stop the test, continue and see what happens
				assertFalse("Timed out" + f, true);
			}
			driver.findElement(By.xpath("//*[@id=\"login-form\"]/fieldset/input[2]")).click();
			try {
				waitFor(driver).until(ExpectedConditions.presenceOfElementLocated(By.id("password")));
			} catch (TimeoutException f) {
				// Do not stop the test, continue and see what happens
				assertFalse("Timed out" + f, true);
			}
			WebElement psdInput = driver.findElement(By.id("password"));
			psdInput.clear();
			psdInput.sendKeys(psd);
			try {
				waitFor(driver).until(ExpectedConditions
						.presenceOfElementLocated(By.xpath("//*[@id=\"login-form\"]/fieldset/input[3]")));
			} catch (TimeoutException f) {
				// Do not stop the test, continue and see what happens
				assertFalse("Timed out" + f, true);
			}
			driver.findElement(By.xpath("//*[@id=\"login-form\"]/fieldset/input[3]")).click();
		}
	}

	@Given("Je clique sur {string}")
	public void je_clique_sur(String report) {
		driver.findElement(By.xpath("//*[@id=\"sidebar\"]/ul/li[3]/a/span")).click();
	}

	@When("je clique sur le {string}")
	public void je_clique_sur_le(String string) {
		driver.findElement(By.xpath("//*[@id=\"select-project-form\"]/div/div[2]/div[2]/input")).click();
	}

	@And("je renseigne le champs {string}, {string}")
	public void je_renseigne_le_champs(String resume, String desc) {

		driver.findElement(By.xpath("//*[@id=\"summary\"]")).sendKeys("resume");
		driver.findElement(By.xpath("//*[@id=\"description\"]")).sendKeys("desc");
	}

	@And("je clique sur le bouton denvoie {string}")
	public void je_clique_sur_le_bouton_denvoie(String submit) {
		driver.findElement(By.xpath("/html/body/div[2]/div[2]/div[2]/div/div/form/div/div[2]/div[2]/input")).click();
	}

	@Then("la demande a le statut {string} dans état.")
	public void la_demande_a_le_statut_dans_état(String state) {
		try {
			waitFor(driver).until(ExpectedConditions.presenceOfElementLocated(By.xpath(
					"//*[@id=\"main-container\"]/div[2]/div[2]/div/div[1]/div/div[2]/div[2]/div/table/tbody/tr[7]/td[1]")));
		} catch (TimeoutException e) {
			// Do not stop the test, continue and see what happens
			assertFalse("Timed out" + e, true);
		}
		assertTrue("Présence du texte nouveau", driver.findElement(By.xpath(
				"//*[@id=\"main-container\"]/div[2]/div[2]/div/div[1]/div/div[2]/div[2]/div/table/tbody/tr[7]/td[1]"))
				.getText().contains(state));
	}

	@Given("Je suis sur l url {string}")
	public void je_suis_sur_l_url(String string) {
		driver.get(string);
	}

	@Then("je suis toujours sur l url {string}")
	public void je_suis_toujours_sur_l_url(String url) {
		String ActualURL = driver.getCurrentUrl();
		assertEquals(ActualURL, url);
	}

}
