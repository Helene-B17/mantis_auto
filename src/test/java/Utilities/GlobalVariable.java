package Utilities;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class GlobalVariable {
	public static final String URL = "http://vps-9851f0e9.vps.ovh.net/mantisbtv2/";
	public static WebDriverWait waitFor(WebDriver driver) { 
		return new WebDriverWait(driver, 1);
	}
	public static boolean checkXpath(WebDriver driver, String path) {
		try {
			   driver.findElement(By.xpath(path));
			   return true;
			} catch (NoSuchElementException e) {
			   return false;
			}
	}
}
