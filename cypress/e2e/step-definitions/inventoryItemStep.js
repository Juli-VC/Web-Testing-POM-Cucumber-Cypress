import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

import { MainPage } from "../pages/mainPage";

let mainPage = new MainPage();

/*
El paso I click on the name of the product nº {int} on the list
pertenece a mainSteps no a inventoryItemSteps
*/

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
