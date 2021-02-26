package Cucumber;


import java.text.SimpleDateFormat;
import java.util.Date;

import org.junit.runner.RunWith;

import Utilities.GlobalVariable;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)
@CucumberOptions(
		plugin= {"pretty", "json:target/json/output.json", "html:FeaturesReport", "html:target/html/report" },
		features="Features", 
		glue="TestCase",
		tags= {"@Connexion, @ConnexionV2"}
	
)
public class CucumberSuiteRunner {

}

