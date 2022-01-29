Feature: Google search function
    Scenario: search keywords "Software" and check the result of Wikipedia link  
        Given I open Google website
        When I search "Software" 
        Then I can see "Wikipedia" link is returned as the first result
    Scenario: search keywords "Literature" and check the result of "britannica.com"
        When I search "Literature" 
        Then I can see "britannica.com" is returned
        And I can get the position for "britannica.com"

