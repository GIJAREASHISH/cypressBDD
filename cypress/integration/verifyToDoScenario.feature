Feature: Verify To Do Scenario
  Scenario: With an And everything is fine
   Given Open web page
   When Enter Values to Placeholder
   And Mark task complete
   And Click on Complete Filter link
   Then Result should be match with completed task in Complete Filter