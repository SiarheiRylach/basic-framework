Feature: Complete Web Form page functionality verification
  As a user
  I want to navigate to Complete Web Form page
  So I can submit the user data

  Scenario: 1. Verify that the user can submit the data
    Given the user is on "Home" page

    When the element "Complete Web Form link" is awaited to be visible
    And the view is scrolled to the element "Complete Web Form link"
    And the element "Complete Web Form link" is clicked
    Then the user should be on "Complete Web Form" page

    When the text "Qwerty1" is typed in "First name field" with waiting before
    And the text "Qwerty2" is typed in "Last name field"
    And the text "Qwerty3" is typed in "Job title field"
    Then the text of input element "First name field" should be "Qwerty1"
    And the text of input element "Last name field" should be "Qwerty2"
    And the text of input element "Job title field" should be "Qwerty3"

    When the element "#2 of Highest level Education radio-buttons" is clicked
    And the element "#2 of Sex checkboxes" is clicked
    And the element "Years experience dropdown" is clicked
    And the element "#3 of Years experience items" is clicked

    When the text "05/05/2020" is typed in "First name field"
    Then the text of input element "First name field" should be "05/05/2020"

    When the element "Submit button" is clicked
    Then the user should be on "Thanks" page

    When the element "Alert" is awaited to be visible
    Then the text of element "Content header" should be "Thanks for submitting your form"
    And the text of element "Alert" should be "The form was successfully submitted!"