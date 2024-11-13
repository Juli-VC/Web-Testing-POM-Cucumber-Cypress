import "cypress-mochawesome-reporter/cucumberSupport";
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

import { LoginPage } from "../pages/loginPage";
import { MainPage } from "../pages/mainPage";

let loginPage = new LoginPage();
let mainPage = new MainPage();

When(
  "I click on the name of the product nº {int} on the list",
  (itemPosition) => {
    mainPage.clickInventoryItemByPosition(itemPosition);
  }
);
When(
  "I add to the cart the product on the detailed inventory-item page",
  () => {
    mainPage.addToCartTheInventoryItem();
  }
);
