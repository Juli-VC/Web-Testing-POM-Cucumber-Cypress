Feature: Main test suite

    Background: Login
        Given I visit "https://www.saucedemo.com/"
        And I check that the url "not.include" the endpoint "inventory"
        When I login with valid credentials
        Then I check that the url "include" the endpoint "inventory"

    # Scenario: Add a product to the cart from main page
    #     Given I check that the shopping cart icon badge does not exist
    #     And I click on the button "shopping-cart-link"
    #     And I check that the url "include" the endpoint "cart"
    #     And I check that the element inventory item does not exist
    #     And I click on the button "continue-shopping"
    #     And I check that the url "include" the endpoint "inventory"
    #     When I add to the cart the first product in the list
    #     And I check that the shopping cart icon contains the number 1
    #     And I click on the button "shopping-cart-link"
    #     And I check that the url "include" the endpoint "cart"
    #     Then I check that the element inventory item exist

    # #Escenario anterior pero usando mejores prácticas "pasos parametrizados"
    # Scenario: Better practice Add a product to the cart from main page
    #     Given I check that the element "shopping-cart-badge" should "not.exist"
    #     And I click on the button "shopping-cart-link"
    #     And I check that the url "include" the endpoint "cart"
    #     And I check that the element "inventory-item" should "not.exist"
    #     And I click on the button "continue-shopping"
    #     And I check that the url "include" the endpoint "inventory"
    #     When I add to the cart the first product in the list
    #     And I check that the element "shopping-cart-badge" should "be.visible"
    #     And I check that the element "shopping-cart-badge" should "contain" the content "1"
    #     And I click on the button "shopping-cart-link"
    #     And I check that the url "include" the endpoint "cart"
    #     Then I check that the element "inventory-item" should "be.visible"


    Scenario: Check that when sorting by price the products are ordered correctly
        # Visit the url https://www.saucedemo.com/
        # Login  con credenciales válidas
        # On Background

        # Comprueba que el select tiene como opcion activa  es "Name (A to Z)
        Given The select has the active choice "Name (A to Z)"
        # # Comprueba  que el primer producto de la lista se llama "Sauce Labs Backpack"
        Then I check the "first" product on the list has the "name" equal to "Sauce Labs Backpack"
        # # Comprueba  que el primer producto de la lista tiene el precio "29.99"
        And I check the "first" product on the list has the "price" equal to "29.99"
        # # Comprueba  que el último producto de la lista se llama "Test.allTheThings() T-Shirt (Red)"
        And I check the "last" product on the list has the "name" equal to "Test.allTheThings() T-Shirt (Red)"
        # # Comprueba  que el último producto de la lista tiene el precio "15.99"
        And I check the "last" product on the list has the "price" equal to "15.99"
        # # Seleccions la opción "Price (low to high)" en el select
        When I select the option "Price (low to high)"
        # # Comprueba  que el primer producto de la lista se llama "Sauce Labs Onesie"
        Then I check the "first" product on the list has the "name" equal to "Sauce Labs Onesie"
        # # Comprueba  que el primer producto de la lista tiene el precio "7.99"
        And I check the "first" product on the list has the "price" equal to "7.99"
        # # Comprueba  que el último producto de la lista se llama "Sauce Labs Fleece Jacket"
        And I check the "last" product on the list has the "name" equal to "Sauce Labs Fleece Jacket"
        # # Comprueba  que el último producto de la lista tiene el precio "49.99"
        And I check the "last" product on the list has the "price" equal to "49.99"
        # # Seleccions la opción "Price (high to low)" en el select
        When I select the option "Price (high to low)"
        # # Comprueba  que el primer producto de la lista se llama "Sauce Labs Fleece Jacket"
        Then I check the "first" product on the list has the "name" equal to "Sauce Labs Fleece Jacket"
        # # Comprueba  que el primer producto de la lista tiene el precio "49.99"
        And I check the "first" product on the list has the "price" equal to "49.99"
        # # Comprueba  que el último producto de la lista se llama "Sauce Labs Onesie"
        And I check the "last" product on the list has the "name" equal to "Sauce Labs Onesie"
        # # Comprueba  que el último producto de la lista tiene el precio 7.99"
        Then I check the "last" product on the list has the "price" equal to "7.99"