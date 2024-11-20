Feature: Inventory item

    Background: Login
        Given I visit "https://www.saucedemo.com/"
        And I check that the url "not.include" the endpoint "inventory"
        When I login with valid credentials
# Este step no es necesario, ya que el step anterior ya comprueba que la url no incluye el endpoint "inventory"
#Then I check that the url "include" the endpoint "inventory"

#Estan muy bien estos 2 tests, pero podrias añadir los productos a la cesta por su nommbre en lugar de por si posición en la lista?
# Ya que haces eso comrpueba que los nombres de los productos añadidos a la cesta son correctos en el carrito

    Scenario: Add a product to the cart from inventory-item details page
        Given I check that the element "shopping-cart-badge" should "not.exist"
        And I check that the element "remove" should "not.exist"
        When I click on the button "shopping-cart-link"
        And I check that the url "include" the endpoint "cart"
        And I check that the element "inventory-item" should "not.exist"
        And I click on the button "continue-shopping"
        Then I check that the url "include" the endpoint "inventory"
        # Enter details of the item-->/inventory-item
        When I click on the name of the product nº 1 on the list
        And I add to the cart the product on the detailed inventory-item page
        And I check that the element "shopping-cart-badge" should "be.visible"
        And I check that the element "shopping-cart-badge" should "contain" the content "1"
        And I check that the element "add-to-cart" should "not.exist"
        Then I check that the button "Remove" should "be.visible"
        # Check shopping-cart
        When I click on the button "shopping-cart-link"
        And I check that the url "include" the endpoint "cart"
        And I check that the element "inventory-item" should "be.visible"
        And I check that the element "item-quantity" should "contain" the content "1"
        And I check that the element "add-to-cart" should "not.exist"
        And I check that the button "Remove" should "be.visible"
        And I check that the element "continue-shopping" should "be.visible"
        Then I check that the element "checkout" should "be.visible"

    Scenario: Flujo completo de compra con 2 productos añadidos 1 desde la lista de productos y otro desde los detalles de un producto
        Given I check that the element "shopping-cart-badge" should "not.exist"
        And I check that the button "Remove" should "not.exist"
        # Add 1 product from list.
        When I add to the cart the first product in the list
        And I check that the element "shopping-cart-badge" should "be.visible"
        And I check that the element "shopping-cart-badge" should "contain" the content "1"
        And I check that the button "Remove" should "be.visible"
        Then I check that the button "Remove" shows only 1 times
        # Add 2º product
        When I click on the name of the product nº 5 on the list
        And I add to the cart the product on the detailed inventory-item page
        And I check that the element "shopping-cart-badge" should "be.visible"
        And I check that the element "shopping-cart-badge" should "contain" the content "2"
        When I click on the button "shopping-cart-link"
        And I check that the element "shopping-cart-badge" should "contain" the content "2"
        And I check that the button "Remove" shows only 2 times
        And I check that the product 1 in the position list has the "name" attribute with the "Sauce Labs Backpack" value
        And I check that the product 1 in the position list has the "price" attribute with the "29.99" value
        And I check that the product 2 in the position list has the "name" attribute with the "Sauce Labs Onesie" value
        Then I check that the product 2 in the position list has the "price" attribute with the "7.99" value
        # Check Inventory. List should have 2 "Remove" buttons only. And 4 "add to cart".
        When I click on the button "continue-shopping"
        And I check that the url "include" the endpoint "inventory"
        And I check that the element "shopping-cart-badge" should "contain" the content "2"

# Podrías en lugar de usar estas aserciones que dependen del resto de elementos en la tabla, comprobar que el botón 
# add to cart es visible y el de remove no existe en el producto antes de añadirlo al carrito y lo contrario
# desupés de añadirlo al carrito

        And I check that the button "Remove" shows only 2 times
        Then I check that the button "Add to cart" shows only 4 times

