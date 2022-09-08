    @hotels-1
    Scenario: Verify Form is blank and Continue button is NOT enabled
        Given I am on hotels landing page
        When I find linkName learn about Hotels.com Rewards
        And I click linkName learn about Hotels.com Rewards
        And Verify Hotels Rewards opened in a new window
        And I Click on Join Now button
        Then I Verify Form is blank
        And Verify Continue button is NOT enabled

        

      @darksky-1
       Scenario: Verify timeline has 12-data points with 2 hours gap from current hour
           Given I am on darksky homepage
           When I find timeline
           Then Verify timeline has 12-data points with 2 hours gap from current hour
      
      @darksky-2
            Scenario: Verify minTemp and maxTemp on and in Today's timeline is same
            Given I am on darksky homepage
            When I find Today button
            And I click on Today button
            Then Verify minTemp on and in Today's timeline is same
            Then Verify maxTemp on and in Today's timeline is same
