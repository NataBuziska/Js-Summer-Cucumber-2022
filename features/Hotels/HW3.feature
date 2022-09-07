Feature:Verify past dates of the current month is not enabled
@ search-1
Scenario: Verify past dates of the current month is not enabled
        Given I am on hotels landing page
        When I click on calendar button
        And I click on previous month button
        And I find current date button
        Then I click on previous date button

@ search-2
Scenario: Verify destination and check-in and check-out dates are as user selected
       Given I am on hotels landing page   
       When I enter "man" in destination field
       And I select "Manila" from auto-suggestion
       And I select "Tomorrow" as check-in date
       And I select "5" days from chek-in as check-out
       And I click on search button on Homepage
       Then I verify the destination has Manila
       And I verify check-in date is tomorrow's date
       And I verify check-out date in 5-days from check-in date