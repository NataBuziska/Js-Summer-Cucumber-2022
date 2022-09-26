Feature:Project
@hotels tests

    Background: Given I am on hotels landing page

    @TC-18
    Scenario: Verify user can update number of guests on Homepage
        When I click on Travelers button on Homepage
        And I select Adults as 6
        And I select Children as 3
        And I select first child age 4 from auto-suggestion
        And I select second child age Under 1 from auto-suggestion
        And I select third child age 7 from auto-suggestion
        And I click Done button
        Then I Verify total number of guests in sum of adults and children as same as selected on step #3 and #4

    @TC-21
    Scenario: Verify Verification message for invalid sign in credentials
        When I click on Sign in link on Homepage
        And I click on Sign in button
        And I enter email address ##@12548 
        And I enter password #12345
        And I click Sign in button
        Then I Verify Verification message is displayed

    @TC-22
    Scenario: Verify error message for invalid data in SignUp form
        When I click on Sign in link on Homepage
        And I click on Sign up link on Homepage
        And I enter email address (#!@###
        Then I Verify error is displayed (Enter a valid email address)
        And I enter first name (!@)
        Then I Verify error is displayed (First name cannot contain special characters)
        And I enter last name (%^&)
        Then I Verify error is displayed (Last name cannot contain special characters)
        And I enter password 1234654
        Then I Verify “Keep me signed in” checkbox is displayed and enabled
        Then I Verify “Continue” button is displayed but NOT enabled

    @TC-20
    Scenario: Verify TermsAndConditions link and PrivacyStatements link open correct page on new tab
        When I click on Sign in link on Homepage
        And I click on Sign up link
        And I click on <linkName> link
        Then I verify <linkName> opens in a new tab
        Examples:
            | linkName             |
            | Terms and Conditions |
            | Privacy Statement    |
    
    @TC-24
    Scenario: Verify error is displayed when user submits the empty feedback form
        When I click on Sign in link on Homepage
        And I click on Feedback link
        And I click on Submit button
        Then I Verify error message is displayed (Please fill in the required information highlighted below.)
        And I Verify star boxes section is in a red dotted box

    @TC-25
    Scenario: Verify user can submit feedback after completing the feedback form
        When I click on Sign in link on Homepage
        And I click on Feedback link
        And I select any star-rating
        And I enter any comments
        And I select any option for How likely are you to return to Hotels.com?
        And I select any answer for Prior to this visit, have you ever booked on Hotels.com?
        And I select any answer for Did you accomplish what you wanted to do on this page?
        And I click on Submit button
        Then I Verify THANK YOU FOR YOUR FEEDBACK. is displayed

    @TC-28
    Scenario TC28: Verify Child-age dropdowns are same as number of Children selected
        When I click on Travelers button on Homepage
        And I select <Children> 
        And I Verify <Children-age dropdown>
        Examples:
            | Children             |Children-age dropdown|
            |   2                  |    2                |
            |   6                  |    6                |
            |   5                  |    5                |
            |   0                  |    is NOT displayed |
                             |
        And I Verify Plus-button is enabled
        And I Verify minus-button is enabled
