import { CommonPage } from "./commonPage";

export class LoginPage extends CommonPage {
  loginFlow(userName, password) {
    cy.get('[data-test="username"]')
      .should("have.value", "")
      .type(userName)
      .should("have.value", userName);
    cy.get('[data-test="password"]')
      .should("have.value", "")
      .type(password)
      .should("have.value", password);
    cy.get('[data-test="login-button"]').click();
  }
  //
  noErrorMessages() {
    //error container
    //cy.get(".error-message-container").should("be.empty");
    cy.get('[data-test="error"]').should("not.exist");
    cy.get('[data-test="error-button"]').should("not.exist");
    cy.get(".error-message-container svg").should("not.exist");
    // inputs "x" svg error-icons (without specifying)
    cy.get(".form_group svg").should("not.exist");
  }
  showsErrorMessagesUsernameRequired() {
    //error container
    //cy.get(".error-message-container").should("exist").and("be.visible");
    cy.get('[data-test="error"]')
      .and("be.visible")
      .and("have.text", "Epic sadface: Username is required");
    cy.get('[data-test="error-button"]').should("be.visible");
    cy.get('[data-test="error-button"]').find("svg").should("be.visible");
    //cy.get(".error-message-container svg").should("be.visible");
    // inputs "x" svg error-icons (without specifying)
    cy.get(".form_group svg").should("be.visible");
  }
  showsErrorMessagesPasswordRequired() {
    //error container
    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("have.text", "Epic sadface: Password is required");
    cy.get('[data-test="error-button"]').should("be.visible");
    cy.get(".error-message-container svg").should("be.visible");
    // inputs "x" svg error-icons (without specifying)
    cy.get(".form_group svg").should("be.visible");
  }
  showsErrorMessageInvalidLoginMatch() {
    //error container
    cy.get('[data-test="error"]')
      .and("be.visible")
      .and(
        "have.text",
        "Epic sadface: Username and password do not match any user in this service"
      );
    cy.get('[data-test="error-button"]').should("be.visible");
    cy.get(".error-message-container svg").should("be.visible");
    // inputs "x" svg error-icons (without specifying)
    cy.get(".form_group svg").should("be.visible");
  }
  ///Parametrizada
  showsErrorMessage(message) {
    //error container
    cy.get('[data-test="error"]').and("be.visible").and("have.text", message);
    cy.get('[data-test="error-button"]').should("be.visible");
    cy.get(".error-message-container svg").should("be.visible");
    // inputs "x" svg error-icons (without specifying)
    cy.get(".form_group svg").should("be.visible");
  }
  //Javi's
  // Functions parameterized
  typeUserName(userName) {
    cy.get('[data-test="username"]', { timeout: 8000 })
      .should("be.empty")
      .type(userName)
      .should("have.value", userName);
  }

  typePassword(password) {
    cy.get('[data-test="password"]')
      .should("be.empty")
      .type(password)
      .should("have.value", password);
  }

  typeOnInputByDataTest(dataTest, Text) {
    cy.get("[data-test=" + dataTest + "]")
      .should("be.empty")
      .type(Text)
      .should("have.value", Text);
  }

  clickLoginButton() {
    cy.get('[data-test="login-button"]').click();
  }

  checkLoginLogo(status) {
    cy.get(".login_logo").should(status);
  }

  loginWithValidCredentials() {
    this.typeStandardUser();
    this.typeSecretSaucePassword();
    this.clickLoginButton();
  }
  //session
  loginKeepSession() {
    cy.session("loginSession", () => {
      cy.visit("https://www.saucedemo.com/"); // Visita la URL de inicio de sesión
      this.typeOnInputByDataTest("username", "standard_user");
      this.typeOnInputByDataTest("password", "secret_sauce");
      this.clickLoginButton();
      cy.url().should("eq", "https://www.saucedemo.com/inventory.html"); // Verifica que se redirige a la página correcta
    });
    cy.visit("https://www.saucedemo.com/inventory.html", {
      failOnStatusCode: false,
    });
    cy.url().should("include", "/inventory.html");
  }
  //accesibility
  betterLoginWithValidCredentials() {
    this.typeOnInputByDataTest("username", "standard_user");
    this.typeOnInputByDataTest("password", "secret_sauce");
    this.clickLoginButton();
  }
}
