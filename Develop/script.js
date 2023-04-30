// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // password character options
  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChar = "0123456789";
  var specialChar = "!@#$%^&*()?.<\>|=+:;,[-_]";
  var options = "";

  console.log("You clicked the button!") //confirmation of click
  //prevent screen from refreshing after click
  event.preventDefault();

  // user prompts for password criteria
  var lengthChoice = parseInt(prompt("Choose how many characters you would like your password to be?"))
  var lowercaseChoice = confirm("Would you like your password to contain Lowercase letters?");
  var uppercaseChoice = confirm("Would you like your password to contain Uppercase letters?");
  var numericChoice = confirm("Would you like your password to contain numbers?");
  var specialChoice = confirm("Would you like your password to contain special characters?");
  

  // user length validation
  if (lengthChoice.length==0 || lengthChoice < 8 || lengthChoice > 128) {
    alert(" You must choose a value between 8 and 128");
    var lengthChoice = parseInt(prompt("Choose how many characters you would like your password to be?"))
  }

  // if user denies all password character criteria alert & prompt
  else if (lowercaseChoice === false && uppercaseChoice === false && numericChoice === false && specialChoice === false) {
    alert("You must choose at least one password criteria");
    var lowercaseChoice = confirm("Would you like your password to contain Lowercase letters?");
    var uppercaseChoice = confirm("Would you like your password to contain Uppercase letters?");
    var numericChoice = confirm("Would you like your password to contain numbers?");
    var specialChoice = confirm("Would you like your password to contain special characters?");
  }

  // Use the criteria that are selected to generate the password from character options
  if (lowercaseChoice) {
    options += lowercaseChar;
  }

  if (uppercaseChoice) {
    options += uppercaseChar;
  }

  if (numericChoice) {
    options += numericChar;
  }

  if (specialChoice) {
    options += specialChar;
  }
  
  var randomPassword= ""
  for (var i = 0; i < lengthChoice; i++) {
    // Continues to select a random character value from the string until it is the desired length
    randomString = [Math.floor(Math.random() * options.length)];
    randomPassword = randomPassword + options[randomString]
  }
  return randomPassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log("Random Password has been generated successfully!")
  passwordText.value = password;
}

// Everytime the generate password button is clicked, the writePassword function is run
generateBtn.addEventListener("click", writePassword);
