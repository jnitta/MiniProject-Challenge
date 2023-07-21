//Variables and Function for Settings
var lowercaseChosen
var uppercaseChosen
var numericChosen
var specialCChosen
var enter


// Special characters 
var specialC = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numerics
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabets
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//Need to put uppercasedAlphabets after alphabet
//Note tostring and split
var uppercasedAlphabets = alphabet.toString().toUpperCase().split(",");
console.log(uppercasedAlphabets)

// Spaces
var space = [];


//PW generating starts

function generatePassword() {
  window.confirm("Please answer to following questions to generate the password.")
  enter = window.prompt("Please select the length of a password you want to generate from 8 to 128.")
  if (!enter) {
    alert("Please enter the value.")

  } else if (enter < 8 || enter > 128) {
  enter = parseInt(prompt("Please choose the length of a password between 8 to 128"));}
 else {
  // Continues once user input is validated
  numericChosen = confirm("Will this contain numbers?");
  specialCChosen = confirm("Will this contain special characters?");
  uppercaseChosen  = confirm("Will this contain Uppercase letters?");
  lowercaseChosen = confirm("Will this contain Lowercase letters?");
};
// To follow the acceptance criteria, we need to require the user to pick at least one of the option.
if (!specialCChosen && !numericChosen && !uppercaseChosen && !lowercaseChosen) {
  choices = alert("You must choose a criteria!");}

  // Else if for 4 negative options
  if (!specialCChosen && !numericChosen && !uppercaseChosen && !lowercaseChosen) {
    choices = alert("You must choose a criteria!");

}
// First if statement that uses user input prompts to determine choices
// Else if for 4 positive options
else if (specialCChosen && numericChosen && uppercaseChosen && lowercaseChosen) {

    choices = specialC.concat(numeric, alphabet, uppercasedAlphabets);
}
// Else if for 3 positive options
else if (specialCChosen && numericChosen && uppercaseChosen) {
    choices = specialC.concat(numeric, uppercasedAlphabets);
}
else if (specialCChosen && numericChosen && lowercaseChosen) {
    choices = specialC.concat(numeric, alphabet);
}
else if (specialCChosen && lowercaseChosen && uppercaseChosen) {
    choices = specialC.concat(numeric, uppercasedAlphabets);
}
else if (numericChosen && lowercaseChosen && uppercaseChosen) {
    choices = numeric.concat(alphabet, uppercasedAlphabets);
}
// Else if for 2 positive options 
else if (specialCChosen && numericChosen) {
    choices = specialC.concat(numeric);

} else if (specialCChosen && lowercaseChosen) {
    choices = specialC.concat(alphabet);

} else if (specialCChosen && uppercaseChosen) {
    choices = specialC.concat(uppercasedAlphabets);
}
else if (lowercaseChosen && numericChosen) {
    choices = alphabet.concat(numeric);

} else if (lowercaseChosen && uppercaseChosen) {
    choices = alphabet.concat(uppercasedAlphabets);

} else if (numericChosen && uppercaseChosen) {
    choices = numeric.concat(uppercasedAlphabets);
}
// Else if for 1 positive option
else if (specialCChosen) {
    choices = specialC;
}
else if (numericChosen) {
    choices = numeric;
}
else if (lowercaseChosen) {
    choices = alphabet;
}
// Created space variable to fill uppercase conversion
else if (uppercaseChosen) {
    choices = space.concat(uppercasedAlphabets);
};
//Note
var finalPassword = []
for (var i = 0; i < enter; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  finalPassword.push(pickChoices);
}
console.log(finalPassword)
//Note added finalpassword with ('')
return finalPassword.join('')
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
return
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page