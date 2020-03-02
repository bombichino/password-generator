# password-generator

## The assignment

Create javascript that will run on a given index.html that will generate a random password as per the described user story and criteria below.

## Chief Execution/Points of note

-Following the skeleton of original javascript provided, fleshed out all of the functions and variables to meet the criteria.
-In order to guarantee that the password was randomized with random chance for character selection while still guaranteeing the password contain at least one of the required character types, I first pushed one of each of the required characters, chosen at random to an array. -Next, I created a combined array consisting of character types selected in the criteria settings.
-Then, the combined array of accepted characters was drawn from at random to fill the desired length of password. This was shuffled as an array, then written as a string to the web page.

## Provided Assignment Criteria:

Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

User Story
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

A

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for 


PASSWORD CRITERIA

WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page