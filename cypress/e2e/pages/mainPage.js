export class MainPage {
  checkCartIconBadgeNotExist() {
    cy.get('[data-test="shopping-cart-badge"]').should("not.exist");
  }

  addFirstProductToCart() {
    cy.get('[data-test="inventory-list"]')
      .children()
      .first()
      .contains("button", "Add to cart")
      .click();
  }

  checkCartIconBadgeContainNumber(number) {
    cy.get('[data-test="shopping-cart-badge"]')
      .should("be.visible")
      .and("contain", number);
  }

  checkSelectActiveOption(optionSelected) {
    // cy.get('[data-test="product-sort-container"]').should('have.value', 'az')
    cy.get('[data-test="product-sort-container"] option:selected').should(
      "have.text",
      optionSelected
    );
  }

  /*
  Con respecto a estas funciones
  */
  checkPositionFirstOrLastHasAttributeEqualTo(
    positionList,
    attribute,
    attrValue
  ) {
    cy.log(`Function called with: ${positionList}, ${attribute}, ${attrValue}`);
    cy.get('[data-test="inventory-list"]')
      .children()
      .should("be.visible")
      .then(($elements) => {
        // Verifica el valor de positionList y selecciona el primer o último elemento
        const targetElement =
          positionList === "first" ? $elements.first() : $elements.last();
        // Verifica que el elemento tenga el atributo especificado
        cy.wrap(targetElement)
          .find(
            `[data-test="inventory-item-${attribute.replace(/['"]+/g, "")}"]`
          )
          .should("include.text", attrValue);
      });
  }

    /*
  Con respecto a la funcion checkPositionListHasAttributeEqualTo, 
  la simplificaría indicando que la selecciñon se hace por posición,
  creo la funcion y el paso relacionado
  */
  checkValueOfProductByPositionOnTheList(productPositionList, productAttribute, attributevalue) {
    cy.get(`[data-test="inventory-item-${productAttribute}"]`)
      .eq(productPositionList - 1)
      .should("contain", attributevalue); 
  }

  // Version para "cualquier" posición (que NO use "primer/ultimo" de la lista)
  checkPositionListHasAttributeEqualTo(positionWord, attribute, attrValue) {
    // Mapea las palabras a los índices
    const positionMap = {
      first: 0,
      second: 1,
      third: 2,
      fourth: 3,
      // Añade más según sea necesario
    };

    // Obtiene el índice correspondiente a la palabra
    const positionIndex = positionMap[positionWord];

    // Verifica si positionWord es válido en el mapa
    if (positionIndex === undefined) {
      throw new Error(`Posición inválida: ${positionWord}`);
    }

    cy.get('[data-test="inventory-list"]')
      .children()
      .should("be.visible")
      .then(($elements) => {
        // Selecciona el elemento en la posición indicada por positionIndex
        const targetElement = $elements.eq(positionIndex);
        // Verifica que el elemento tenga el atributo especificado
        cy.wrap(targetElement)
          .find(
            `[data-test="inventory-item-${attribute.replace(/['"]+/g, "")}"]`
          )
          .should("include.text", attrValue);
      });
  }

  selectOption(option) {
    cy.get('[data-test="product-sort-container"]')
      .should("be.visible")
      .select(option);
    cy.get('[data-test="product-sort-container"] option:selected').should(
      "have.text",
      option
    );
  }
}
