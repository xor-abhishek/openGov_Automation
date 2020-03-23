@HumanResource
Feature: Automate e2e Human resource page functionality

    @HumanResourceFunctionality
    Scenario: Navigate to Human resource page and test the functionality of work with employees module

        Given I login to OpenGOV page
        When I redirected to CMT page
        And Enter the User credentials
        Then Verify the main page title
        When I navigated to Human Resource Page
        Then I verify the Human Resource Page URL
        And I verify the Human Resource Page title
        # And I verify the my task containers visibility
        # And I verify the menu task containers visibility
        # And Elements "Control Files" should be visible in human resource page
        # And Elements "Work with Employees" should be visible in human resource page
        # And Elements "Reports" should be visible in human resource page
        When I selected the "Work with Employees"
        And I maximize the window
        # Then Following "Elements" should be visible on the page
        #     | Elements            |
        #     | EMPLOYEE_NUMBER     |
        #     | FULL_NAME           |
        #     | ADDRESS             |
        #     | DATE_OF_BIRTH       |
        #     | ENTITY_PHONE_NUMBER |
        # And Search by Employee Number
        # And Verify that Employee record number "5"
        Then Verify that Employee list are sorted
        And I Select and Deselect the Employee record
        And I selected the first employee record
        # And Following "Elements" should be visible on the page
        #     | Elements       |
        #     | Insurance      |
        # When I selected the "Insurance"
        # Then I selected the "expandButton"
