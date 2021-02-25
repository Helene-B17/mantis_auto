package Utilities;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.RemoteWebDriver;


public class SetUp {
	private static DesiredCapabilities capability = DesiredCapabilities.chrome();
	private static WebDriver driver;
	public static WebDriver SetDriverUp(String browser) {
		//FOR LOCAL RUN
		 if(driver != null && driver.toString().contains(browser.toLowerCase())) {
			
			System.out.println("*****************************************************************************************************************************" +
					driver.toString());
			return driver;
		}
		
		if (browser == "Chrome") {
			// for linux quote if you are on windows
		  System.setProperty("webdriver.chrome.driver", "src/test/java/Utilities/chromedriver"); 
		  	// for windows quote if you are on linux
		  // System.setProperty("webdriver.chrome.driver", "src/test/java/Utilities/chromedriver.exe"); 
		  ChromeOptions options = new ChromeOptions();
		  options.addArguments("--headless");
		  driver = new ChromeDriver(options);
		}
		
		  driver.manage().timeouts().implicitlyWait(1,TimeUnit.SECONDS); 
		  driver.get(GlobalVariable.URL);
		  driver.manage().window().maximize();
		  return driver;
		
		// FOR GRID RUN
		/*
		capability.setBrowserName(browser);
		capability.setPlatform(Platform.LINUX);
		String nodeUrlChrome = "http://172.17.0.3:5555/wd/hub";
		try {
			driver = new RemoteWebDriver(
					new URL(nodeUrlChrome), capability);
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return driver;
		*/
	}
	
}