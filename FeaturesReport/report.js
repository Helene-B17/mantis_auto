$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Demande.feature");
formatter.feature({
  "name": "Formuler une demande",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Demande"
    }
  ]
});
formatter.scenarioOutline({
  "name": "soumettre une demande",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DemandeN"
    }
  ]
});
formatter.step({
  "name": "Je clique sur \"rapporter une anomnalie\"",
  "keyword": "Given "
});
formatter.step({
  "name": "je clique sur le \"Choisir un projet\"",
  "keyword": "When "
});
formatter.step({
  "name": "je renseigne le champs \u003cresume\u003e, \u003cdescription\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "je clique sur le bouton denvoie \"Soumettre l\u0027anomalie\"",
  "keyword": "And "
});
formatter.step({
  "name": "la demande a le statut \"nouveau\" dans état.",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "resume",
        "description"
      ]
    },
    {
      "cells": [
        "\"ça marche pas\"",
        "\"vraiment ça marche pas\""
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Etre sure la page de connexion",
  "keyword": "Given "
});
formatter.match({
  "location": "Demande.etre_sure_la_page_de_connexion()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Me connecter avec le login \"kevin\" et le mdp \"K-istqb\"",
  "keyword": "And "
});
formatter.match({
  "location": "Demande.me_connecter_avec_le_login_et_le_mdp(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "soumettre une demande",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Demande"
    },
    {
      "name": "@DemandeN"
    }
  ]
});
formatter.step({
  "name": "Je clique sur \"rapporter une anomnalie\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Demande.je_clique_sur(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "je clique sur le \"Choisir un projet\"",
  "keyword": "When "
});
formatter.match({
  "location": "Demande.je_clique_sur_le(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "je renseigne le champs \"ça marche pas\", \"vraiment ça marche pas\"",
  "keyword": "And "
});
formatter.match({
  "location": "Demande.je_renseigne_le_champs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "je clique sur le bouton denvoie \"Soumettre l\u0027anomalie\"",
  "keyword": "And "
});
formatter.match({
  "location": "Demande.je_clique_sur_le_bouton_denvoie(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la demande a le statut \"nouveau\" dans état.",
  "keyword": "Then "
});
formatter.match({
  "location": "Demande.la_demande_a_le_statut_dans_état(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "soumettre une demande en omettant un champs obligatoire",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DemandeE1"
    }
  ]
});
formatter.step({
  "name": "Je clique sur \"rapporter une anomnalie\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Je suis sur l url \"http://vps-9851f0e9.vps.ovh.net/mantisbtv2/\"",
  "keyword": "Given "
});
formatter.step({
  "name": "je clique sur le \"Choisir un projet\"",
  "keyword": "When "
});
formatter.step({
  "name": "je renseigne le champs \u003cresume\u003e, \u003cdescription\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "je clique sur le bouton denvoie \"Soumettre l\u0027anomalie\"",
  "keyword": "And "
});
formatter.step({
  "name": "je suis toujours sur l url \"http://vps-9851f0e9.vps.ovh.net/mantisbtv2/bug_report_page.php\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "resume",
        "description"
      ]
    },
    {
      "cells": [
        "\"\"",
        "\"coucou\""
      ]
    },
    {
      "cells": [
        "\"coucou\"",
        "\"\""
      ]
    },
    {
      "cells": [
        "\"\"",
        "\"\""
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Etre sure la page de connexion",
  "keyword": "Given "
});
formatter.match({
  "location": "Demande.etre_sure_la_page_de_connexion()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Me connecter avec le login \"kevin\" et le mdp \"K-istqb\"",
  "keyword": "And "
});
formatter.match({
  "location": "Demande.me_connecter_avec_le_login_et_le_mdp(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "soumettre une demande en omettant un champs obligatoire",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Demande"
    },
    {
      "name": "@DemandeE1"
    }
  ]
});
formatter.step({
  "name": "Je clique sur \"rapporter une anomnalie\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Demande.je_clique_sur(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Je suis sur l url \"http://vps-9851f0e9.vps.ovh.net/mantisbtv2/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Demande.je_suis_sur_l_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "je clique sur le \"Choisir un projet\"",
  "keyword": "When "
});
formatter.match({
  "location": "Demande.je_clique_sur_le(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"select-project-form\"]/div/div[2]/div[2]/input\"}\n  (Session info: chrome\u003d88.0.4324.182)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027mzzcWork\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.8.0-44-generic\u0027, java.version: \u00271.8.0_282\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.182, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: /tmp/.com.google.Chrome.6ZuvBO}, goog:chromeOptions: {debuggerAddress: localhost:42049}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 65cbe9736ed3c6f8d6fca8d774dd4a88\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"select-project-form\"]/div/div[2]/div[2]/input}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat TestCase.Demande.je_clique_sur_le(Demande.java:84)\n\tat ✽.je clique sur le \"Choisir un projet\"(Features/Demande.feature:24)\n",
  "status": "failed"
});
formatter.step({
  "name": "je renseigne le champs \"\", \"coucou\"",
  "keyword": "And "
});
formatter.match({
  "location": "Demande.je_renseigne_le_champs(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "je clique sur le bouton denvoie \"Soumettre l\u0027anomalie\"",
  "keyword": "And "
});
formatter.match({
  "location": "Demande.je_clique_sur_le_bouton_denvoie(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "je suis toujours sur l url \"http://vps-9851f0e9.vps.ovh.net/mantisbtv2/bug_report_page.php\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Demande.je_suis_toujours_sur_l_url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Etre sure la page de connexion",
  "keyword": "Given "
});
formatter.match({
  "location": "Demande.etre_sure_la_page_de_connexion()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Me connecter avec le login \"kevin\" et le mdp \"K-istqb\"",
  "keyword": "And "
});
formatter.match({
  "location": "Demande.me_connecter_avec_le_login_et_le_mdp(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "soumettre une demande en omettant un champs obligatoire",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Demande"
    },
    {
      "name": "@DemandeE1"
    }
  ]
});
formatter.step({
  "name": "Je clique sur \"rapporter une anomnalie\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Demande.je_clique_sur(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Je suis sur l url \"http://vps-9851f0e9.vps.ovh.net/mantisbtv2/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Demande.je_suis_sur_l_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "je clique sur le \"Choisir un projet\"",
  "keyword": "When "
});
formatter.match({
  "location": "Demande.je_clique_sur_le(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"select-project-form\"]/div/div[2]/div[2]/input\"}\n  (Session info: chrome\u003d88.0.4324.182)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027mzzcWork\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.8.0-44-generic\u0027, java.version: \u00271.8.0_282\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.182, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: /tmp/.com.google.Chrome.6ZuvBO}, goog:chromeOptions: {debuggerAddress: localhost:42049}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 65cbe9736ed3c6f8d6fca8d774dd4a88\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"select-project-form\"]/div/div[2]/div[2]/input}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat TestCase.Demande.je_clique_sur_le(Demande.java:84)\n\tat ✽.je clique sur le \"Choisir un projet\"(Features/Demande.feature:24)\n",
  "status": "failed"
});
formatter.step({
  "name": "je renseigne le champs \"coucou\", \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "Demande.je_renseigne_le_champs(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "je clique sur le bouton denvoie \"Soumettre l\u0027anomalie\"",
  "keyword": "And "
});
formatter.match({
  "location": "Demande.je_clique_sur_le_bouton_denvoie(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "je suis toujours sur l url \"http://vps-9851f0e9.vps.ovh.net/mantisbtv2/bug_report_page.php\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Demande.je_suis_toujours_sur_l_url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Etre sure la page de connexion",
  "keyword": "Given "
});
formatter.match({
  "location": "Demande.etre_sure_la_page_de_connexion()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Me connecter avec le login \"kevin\" et le mdp \"K-istqb\"",
  "keyword": "And "
});
formatter.match({
  "location": "Demande.me_connecter_avec_le_login_et_le_mdp(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "soumettre une demande en omettant un champs obligatoire",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Demande"
    },
    {
      "name": "@DemandeE1"
    }
  ]
});
formatter.step({
  "name": "Je clique sur \"rapporter une anomnalie\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Demande.je_clique_sur(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Je suis sur l url \"http://vps-9851f0e9.vps.ovh.net/mantisbtv2/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Demande.je_suis_sur_l_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "je clique sur le \"Choisir un projet\"",
  "keyword": "When "
});
formatter.match({
  "location": "Demande.je_clique_sur_le(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"select-project-form\"]/div/div[2]/div[2]/input\"}\n  (Session info: chrome\u003d88.0.4324.182)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027mzzcWork\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.8.0-44-generic\u0027, java.version: \u00271.8.0_282\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.182, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: /tmp/.com.google.Chrome.6ZuvBO}, goog:chromeOptions: {debuggerAddress: localhost:42049}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 65cbe9736ed3c6f8d6fca8d774dd4a88\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"select-project-form\"]/div/div[2]/div[2]/input}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat TestCase.Demande.je_clique_sur_le(Demande.java:84)\n\tat ✽.je clique sur le \"Choisir un projet\"(Features/Demande.feature:24)\n",
  "status": "failed"
});
formatter.step({
  "name": "je renseigne le champs \"\", \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "Demande.je_renseigne_le_champs(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "je clique sur le bouton denvoie \"Soumettre l\u0027anomalie\"",
  "keyword": "And "
});
formatter.match({
  "location": "Demande.je_clique_sur_le_bouton_denvoie(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "je suis toujours sur l url \"http://vps-9851f0e9.vps.ovh.net/mantisbtv2/bug_report_page.php\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Demande.je_suis_toujours_sur_l_url(String)"
});
formatter.result({
  "status": "skipped"
});
});