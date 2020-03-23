@OpenGOV
Feature: OpenGOV Application

  @OpenGOVLogin
  Scenario: login to OpenGOV Application UI and verify the page title

    Given I login to OpenGOV page
    When I redirected to CMT page
    And Enter the User credentials
    Then Verify the main page title
