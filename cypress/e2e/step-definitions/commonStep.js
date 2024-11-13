import "cypress-mochawesome-reporter/cucumberSupport";
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
// Clases importadas
import { CommonPage } from "../pages/commonPage";
//Instancias de clase
let commonPage = new CommonPage();

/*
He estandarizado la forma en la que tienes declarados los steps, me parece que asíe s más clara, 
en cualquier caso si prefieres otra, cambiala, pero procura que sea igual en todos los steps
*/

Given("I visit {string}", (url) => {
  commonPage.visitLink(url);
});

Given("I check that the url contains {string}", (url) => {
  commonPage.checkUrlContent(url);
});

Given("I check that the url does not contain {string}", (url) => {
  commonPage.checkUrlNotContent(url);
});

When(
  "I check that the url {string} the endpoint {string}",
  (includeProperty, endpoint) => {
    commonPage.checkUrl(includeProperty, endpoint);
  }
);

When(
  "I type in the input {string} the value {string}",
  (inputDataTest, inputValue) => {
    commonPage.typeOnInputByDataTest(inputDataTest, inputValue);
  }
);

When("I click on the button {string}", (buttonName) => {
  commonPage.clickButtonByDataTest(buttonName);
});

When(
  "I check that the value in the input {string} should be {string}",
  (inputDataTest, inputValue) => {
    commonPage.checkValueOnInputByDataTest(inputDataTest, inputValue);
  }
);

When(
  "I check that the element {string} should {string}",
  (elementDataTest, status) => {
    commonPage.checkStatusOnElementByDataTest(elementDataTest, status);
  }
);
When("I check that the button {string} should {string}", (text, status) => {
  commonPage.checkButtonStatusByText(text, status);
});
When(
  "I check that the button {string} shows only {int} times",
  (text, number) => {
    commonPage.checkCountsButtonByText(text, number);
  }
);

When(
  "I check that the element {string} should {string} the content {string}",
  (elementDataTest, statusContent, content) => {
    commonPage.checkElementContent(elementDataTest, statusContent, content);
  }
);
When("I click on Button that contain text {string}", (text) => {
  commonPage.clickButtonByText(text);
});

// Steps para test de accesibilidad
Then("I test the accesibility in all the screen", () => {
  commonPage.testAccesibilityInScreen();
});

Then(
  "I test the accesibility on the element with locator {string}",
  (elementLocator) => {
    commonPage.testAccesibilityOnElement(elementLocator);
  }
);
When(
  "I check that the page should {string} the text {string}",
  (status, text) => {
    commonPage.checkBodyText(status, text);
    // Status accept the values: contain , not.contain
  }
);
