export class CommonPage {
  visitLink(url) {
    cy.visit(url);
  }

  checkUrlAndEndpoint(url, assertion, endpoint) {
    cy.visit(url);
    cy.url(url).should(assertion, endpoint);
  }
  ////
  checkUrl(includeProperty, endpoint) {
    cy.url().should(includeProperty, endpoint);
  }
  typeOnInputByDataTest(inputDataTest, inputValue) {
    if (inputValue) {
      // si y solo sí, inputvalue existe y es real.
      cy.get(`[data-test="${inputDataTest}"]`).clear().type(inputValue);
    }
    // si no es valido o no viene nada,  no hace nada.
  }

  checkValueOnInputByDataTest(inputDataTest, inputValue) {
    cy.get(`[data-test="${inputDataTest}"]`).should("have.value", inputValue);
  }

  clickButtonByDataTest(buttonName) {
    cy.get(`[data-test="${buttonName}"]`).should("be.visible").click();
  }
  //Se puede usar para comprobar si cualquier elemento con data-test existe, es visible o no.
  checkStatusOnElementByDataTest(elementDataTest, status) {
    cy.get(`[data-test="${elementDataTest}"]`).should(status);
  }

  // Este estep nos sirve para comprobar si un elemento contiene o no contiene una string
  checkElementContent(elementDataTest, statusContent, content) {
    cy.get(`[data-test="${elementDataTest}"]`).and(statusContent, content);
  }

  //
  waitXSeconds(seconds) {
    cy.wait(seconds);
  }

  /// Función para testear accesibilidad
  testAccesibilityInScreen() {
    cy.injectAxe();
    cy.checkA11y();
  }

  testAccesibilityOnElement(elementLocator) {
    cy.injectAxe();
    cy.checkA11y(elementLocator);
  }
  checkBodyText(status, text) {
    cy.get("body").should(status, text);
  }
}
