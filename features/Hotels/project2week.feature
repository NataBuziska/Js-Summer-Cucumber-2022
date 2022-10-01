Feature:Project
@hotels tests sprint 2

Background: Given I am on hotels landing page
    @TC-17
    Scenario: Verify past dates and back button on Current month's calendar is disabled
    When I click on Dates
    And I go to current month if not displayed
    And I verify for current month
    Then I verify past dates (if any) are disabled
    Then I verify back button on current month is disabled


    TC-29 
    Scenario: Verify List your Property flow
    When I click  on List your property
    And I verify What would you like to list? is displayed
    And I verify Lodging and Private residence options are displayed
    And I Click on Private residence
    And I verify Step 1 of 3 is displayed
    And I verify See how much you could earn! is displayed
    And I enter “4“ as bedroom
    And I enter “2.5“ as bathroom
    And I click on “Next” button
    And I verify ”Step 2 of 3” is displayed
    And I verify “Where is your property located?” is displayed
    And I Enter “121” in address
    And I Select 1211 6th Avenue, New York, NY, USA from auto-suggestion
    Then I verify graph is displayed
    Then I verify pin in graph is displayed
    And I verify Pin location may not be exact is displayed below graph

    TC-30
    Scenario: Verify invalid phone number error
    When I Scroll to Get the app button
    And I Enter “0000000000” in Phone number
    And I click to Get the app button
    Then I verify “Please enter a valid phone number.“ error is displayed
