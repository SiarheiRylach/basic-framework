Feature: Complete Web Form verification
  As a user 
  I want to fill in and submit the web form
  

  Scenario Outline: 1.<index> Submitting Complete Web Form
    Given the user is on "Home" page

    When the view is scrolled to the element "Complete Web Form link"
    And the element "Complete Web Form link" is clicked 
    Then the user should be on "Complete Web Form" page

    When the element "First name field" is awaited to be visible
    Then the element "Last name field" should be displayed on the page
    And the element "Job title field" should be displayed on the page
    And the element "#1 of Highest level Education radio-buttons" should be displayed on the page
    And the element "#2 of Highest level Education radio-buttons" should be displayed on the page
    And the element "#3 of Highest level Education radio-buttons" should be displayed on the page
    And the element "#1 of Sex checkboxes" should be displayed on the page
    And the element "#2 of Sex checkboxes" should be displayed on the page
    And the element "#3 of Sex checkboxes" should be displayed on the page
    And the element "Years experience dropdown" should be displayed on the page
    And the element "Date picker" should be displayed on the page
    And the element "Submit button" should be displayed on the page

    When the text "<first name>" is typed in "First name field"
    Then the text of input element "First name field" should be "<first name>"

    When the text "<last name>" is typed in "Last name field"
    Then the text of input element "Last name field" should be "<last name>"

    When the text "<job title>" is typed in "Job title field"
    Then the text of input element "Job title field" should be "<job title>"

    When the element "#1 of Highest level Education radio-buttons" is clicked
    And the element "#1 of Sex checkboxes" is clicked
    And the element "#1 of Years experience items" is clicked

    When the text "<date>" is typed in "Date picker"
    Then the text of input element "Date picker" should be "<date>"

    When the element "Submit button" is clicked 
    Then the user should be on "Thanks" page
    
    When the element "Content header" is awaited to be visible
    And the element "Alert" is awaited to be visible
    Then the text of element "Content header" should be "Thanks for submitting your form"
    And the text of element "Alert" should be "The form was successfully submitted!"

    Examples:
    | index | first name | last name   | job title                 | date       |
    | 1     | Valeryia   | Budzinskaya | Sofrware testing engineer | 05/21/2020 |
    | 2     | Ivan       | Ivanov      | Developer                 | 05/22/2020 |