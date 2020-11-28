// Assignment Code
var generateBtn = document.querySelector("#generate");
var abcCaps = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var abcLower = ["abcdefghijklmnopqrstuvwxyz"];
var number = ["1234567890"];
var special = ["!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];

console.log(abcLower);
// Prompt questions for password parameters
function generatePassword() {
  prompt("Choose password length - Pick between 8 and 128 characters");
 
  prompt("Do you want to include uppercase letters? YES or NO")
 
  prompt("Do you want to unclude lowercase letters? YES or NO")
 
  prompt("Do you want to include numbers? YES or NO")

  prompt("Do you want to include special characters? YES or NO")
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
