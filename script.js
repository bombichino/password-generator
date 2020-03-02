// create an array for each option, uppercase letters, lowercase letters, special characters

var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerArray = ["a","b", "c", "d", "e", "f", "g","h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialArray = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", ";", ":", "'", "<", ",", ".", ">", "?", "/"]
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var generateBtn = document.querySelector("#generate");

// set password criteria, requiring a password length to be between 8 and 128 characters long, not accepting numbers above or below or choices not an integer between 8 and 128; use of lower case, upper case, number (random), and special characters.
function generatePassword (){
var passwordLength = parseInt(prompt("Choose a password length (a number between 8 and 128 characters; password will have a minimum of 8 characters)."));
while (Number.isInteger(passwordLength) !== true || passwordLength < 8 || passwordLength > 128){  
  if (Number.isInteger(passwordLength) !== true){
      alert("You must enter a number between 8 and 128.");
      var passwordLength = parseInt(prompt("Choose a password length (a number between 8 and 128 characters)."));
  }
  else if (passwordLength <8 ) {
    alert("You must enter a number between 8 and 128.");
      var passwordLength = parseInt(prompt("Choose a password length (a number between 8 and 128 characters)."));
  }
  else if (passwordLength > 128) {
    alert("You must enter a number between 8 and 128.");
      var passwordLength = parseInt(prompt("Choose a password length (a number between 8 and 128 characters)."));
  }
}
var useLowerCase = confirm("Press 'OK' if you would like lowercase letters to be included, 'Cancel' if not.");
var useUpperCase = confirm("Press 'OK' if you would like uppercase letters to be included, 'Cancel' if not.");
var useNumbers = confirm("Press 'OK' if you would like numbers to be included, 'Cancel' if not.");
var useSpecials = confirm("And lastly, press 'OK' if you would like special characters to be included, 'Cancel' if not.");
var passwordArray = []
var passwordFillerArray = []
console.log(passwordLength, useLowerCase, useUpperCase, useNumbers, useSpecials);

// setting up basic required characters that must be present - if each criteria is chose, push at least one character type to the password array to guarantee its presence
// if each criteria is met, push its array into a password filler array from which the rest of the password will be chosen at random
if (useLowerCase){
  passwordArray.push(lowerArray[Math.floor(Math.random() * lowerArray.length)]);
  passwordFillerArray = passwordFillerArray.concat(lowerArray);
  console.log(passwordFillerArray);
}
if (useUpperCase){
  passwordArray.push(upperArray[Math.floor(Math.random() * upperArray.length)]);
  passwordFillerArray = passwordFillerArray.concat(upperArray);  console.log(passwordFillerArray);
}
if (useSpecials){
  passwordArray.push(specialArray[Math.floor(Math.random() * specialArray.length)]);  
  passwordFillerArray = passwordFillerArray.concat(specialArray)
  console.log(passwordFillerArray);
}
if (useNumbers){
  passwordArray.push(Math.floor(Math.random() * 10));
  passwordFillerArray = passwordFillerArray.concat(numberArray);
}
console.log(passwordFillerArray);

// with the password filler array comprised of 1 of any character type chosen by the criteria, use to fill at random for the remainder of the chosen password length
while (passwordArray.length < passwordLength){
  for (var i = passwordArray.length; i < passwordLength; i++){ 
    passwordArray.push(passwordFillerArray[Math.floor(Math.random() * passwordFillerArray.length)]);
  }
  console.log(passwordArray);


//Fisher-Yates Shuffle to randomize the filled password array
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}
shuffle(passwordArray);
console.log(passwordArray);

// change password to string, console.log to confirm for debugging
// append password to page
var passwordResult = passwordArray.join("");
console.log(passwordResult);
console.log(typeof passwordResult);
var passwordText = document.querySelector("#password");

  passwordText.textContent = passwordResult;
}
}

// call the functions and generate password
generateBtn.addEventListener("click", generatePassword);



// Pseudocode from class for reference:
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
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// PROMPT length 8-128 characters
// PROMPT character types, must choose one
// PROMPT lowercase
// PROMPT uppercase
// PROMPT numeric
// PROMPT special characters

// when all are answered, return password alert or written on page
