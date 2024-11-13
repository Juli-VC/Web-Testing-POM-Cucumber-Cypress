import "cypress-mochawesome-reporter/cucumberSupport";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Clases importadas
import { MainPage } from "../pages/mainPage.js";

//Instancias de clase
let mainPage = new MainPage();

When("I check that the shopping cart icon badge does not exist", () => {
  mainPage.checkCartIconBadgeNotExist();
});

When("I add to the cart the first product in the list", () => {
  mainPage.addFirstProductToCart();
});

When(
  "I check that the shopping cart icon contains the number {int}",
  (number) => {
    mainPage.checkCartIconBadgeContainNumber(number);
  }
);

Given("The select has the active choice {string}", (optionSelected) => {
  mainPage.checkSelectActiveOption(optionSelected);
});

When(
  "I check the {string} product on the list has the {string} equal to {string}",
  (positionList, attribute, attrValue) => {
    mainPage.checkPositionFirstOrLastHasAttributeEqualTo(
      positionList,
      attribute,
      attrValue
    );
  }
);

When("I select the option {string}", (option) => {
  mainPage.selectOption(option);
});

// Step para comprobar valores de atributos de un producto por su posicion en la lista
When(
  "I check that the product {int} in the position list has the {string} attribute with the {string} value",
  (productPositionList, productAttribute, attributevalue) => {
    mainPage.checkValueOfProductByPositionOnTheList(
      productPositionList,
      productAttribute,
      attributevalue
    );
  }
);
