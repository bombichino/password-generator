// create an array for each option, uppercase letters, lowercase letters, special characters
// conditional statements to alllow for when someone selects no
// prompts and conditionals
// Math.random
// if/else statements
// ## High Level PseudoCode
// after creation of HTML
// // link button click to excecuting function EVENT LISTENER
//     //  EVENT LISTENER : generatePassword
//         HTML
//         <button onclick = "generatePassword">
//             generatePassword
//         </button>
//         JS
//         function generatePassword() {
//         // everything that should happen to generate the password
//         // (i.e., show prompts to generate password)
//         }
// // prompt to get all of the information
//     // number of characters between 8 and 128, which case and special characters
// // if / else statements to handle if the user wants to include or disclude certain features of the password
// // if user clicks cancel on how many characters, create a minimum character password
//     // or throw up an error that says they must enter a number between 8 and 128
// //



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// PROMPT length 8-128 characters
// PROMPT character types, must choose one
// PROMPT lowercase
// PROMPT uppercase
// PROMPT numeric
// PROMPT special characters

// when all are answered, return password alert or written on page
