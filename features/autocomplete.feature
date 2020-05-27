Feature: Autocomplete page verification
  As a user 
  I want to fill in the web form 
  So it will be autocomplete


  Scenario Outline: <id> Autocompletion of web form
    Given the user is on "Home" page

    When the element "Autocomplete link" is clicked
    Then the user should be on "Autocomplete" page
    
    When the element "Address" is awaited to be visible
    Then the element "Street address" should be displayed on the page
    And the element "Street address 2" should be displayed on the page
    And the element "City" should be displayed on the page
    And the element "State" should be displayed on the page
    And the element "Zip code" should be displayed on the page
    And the element "Country" should be displayed on the page

    When the text "<address>" is typed in "Address"
    Then the text of input element "Address" should be "<address>"

    When the text "<street address>" is typed in "Street address"
    Then the text of input element "Street address" should be "<street address>"

    When the text "<street address 2>" is typed in "Street address 2"
    Then the text of input element "Street address 2" should be "<street address 2>"

    When the text "<city>" is typed in "City"
    Then the text of input element "City" should be "<city>"

    When the text "<state>" is typed in "State"
    Then the text of input element "State" should be "<state>"

    When the text "<zip code>" is typed in "Zip code"
    Then the text of input element "Zip code" should be "<zip code>"

    When the text "<country>" is typed in "Country"
    Then the text of input element "Country" should be "Poland"


      Examples:
    | id | address                                  | street address | street address 2  | city       | state       | zip code | country       |
    | 1  | 12340 Boggy Creek Road, Orlando, FL, USA | 12340          | Boggy Creek Road  | Orlando    | FL          | 32824    | United States |
    | 2  | Adama Mickiewicza 49, Warsaw, Poland     | 49             | Adama Mickiewicza | Warszawa   | mazowieckie | 01-625   | Poland        |