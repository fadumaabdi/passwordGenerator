// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  return "banana"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log("hello")
  passwordText.value = password;

}

// Everytime the generate password button is clicked, the writePassword function is run
generateBtn.addEventListener("click", writePassword);
