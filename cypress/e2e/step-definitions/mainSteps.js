import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Clases importadas
import { MainPage } from "../pages/mainPage";

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
