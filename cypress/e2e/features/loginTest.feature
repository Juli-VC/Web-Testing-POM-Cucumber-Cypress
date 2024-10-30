#Para comentar en un archivo .feature se hace con este símbolo #
#Esto es la descripción de la batería de test contenida en este archivo
Feature: Login test suite
    Background:
        #Esto es equivalente al beforeEach
        Given I visit "https://www.saucedemo.com/"

    # Scenario: Login Check url and endpoint
    #     Given I check that the url 'https://www.saucedemo.com/' should 'not.include', 'inventory'
    #     Given I check that the url 'https://www.saucedemo.com/' should 'include', '/'

    # #
    # Scenario: Login happy path
    #     Given I check that the url "not.include" the endpoint "inventory"
    #     And I check that the value in the input "username" should be ""
    #     And I type in the input "username" the value "standard_user"
    #     And I check that the value in the input "password" should be ""
    #     And I type in the input "password" the value "secret_sauce"
    #     When I click on the button "login-button"
    #     Then I check that the url "include" the endpoint "inventory"

    # Scenario: Login single step flow
    #     Given I check that the url "not.include" the endpoint "inventory"
    #     When I login with valid credentials
    #     Then I check that the url "include" the endpoint "inventory"

    #
    Scenario: Login error. Submit without typing nothing.
        Given I check that the url "not.include" the endpoint "inventory"
        And It should NOT show error messages
        When I click on the button "login-button"
        Then It should show error message: Username is required
    Scenario: Login error. Submit without typing username.
        Given I check that the url "not.include" the endpoint "inventory"
        And It should NOT show error messages
        And I type in the input "password" the value "secret_sauce"
        When I click on the button "login-button"
        Then It should show error message: Username is required
    Scenario: Login error. Submit without typing password.
        Given I check that the url "not.include" the endpoint "inventory"
        And It should NOT show error messages
        And I type in the input "username" the value "standard_user"
        When I click on the button "login-button"
        Then It should show error message: Password is required
    Scenario: Login error. Invalid login.
        Given I check that the url "not.include" the endpoint "inventory"
        And It should NOT show error messages
        And I type in the input "username" the value "standard_user"
        And I type in the input "password" the value "1234"
        When I click on the button "login-button"
        Then It should show error message: both inputs dont match any user
    Scenario: Login error. Discard error-message container.
        Given I check that the url "not.include" the endpoint "inventory"
        And It should NOT show error messages
        And I type in the input "username" the value "standard_user"
        And I type in the input "password" the value "1234"
        When I click on the button "login-button"
        Then It should show error message: both inputs dont match any user
        When I click on the button "error-button"
        Then It should NOT show error messages