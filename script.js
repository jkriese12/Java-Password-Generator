// Assignment Code
var generateBtn = document.querySelector("#generate");
var abcCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcLower = "abcdefghijklmnopqrstuvwxyz";
var number = "1234567890";
var special = "!#$%&'()*+,-./:;<=>?@[/]^_`{|}~";

// Prompt questions for password parameters
function generatePassword() {

 

  var pwLength = Number(prompt("Choose password length - Pick between 8 and 128 characters"));
// Loops back prompt until user selects something within the parameters
  while (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) pwLength = Number(prompt("Length must be between 8-128 characters - Please enter value between 8-128"));
   
  
  var upperCon = confirm("Do you want to include uppercase letters? Yes (OK) or No (Cancel)");
 
  var lowerCon = confirm("Do you want to unclude lowercase letters? Yes (OK) or No (Cancel)");
 
  var numbersCon = confirm("Do you want to include numbers? Yes (OK) or No (Cancel)");

  var specialsCon = confirm("Do you want to include special characters? Yes (OK) or No (Cancel)");
// Loops back confirms if user does not select anything
  while (!upperCon && !lowerCon && !numbersCon && !specialsCon) {
    alert("You must select a character type");
    
    var upperCon = confirm("Do you want to include uppercase letters? Yes (OK) or No (Cancel)");
 
    var lowerCon = confirm("Do you want to unclude lowercase letters? Yes (OK) or No (Cancel)");
 
    var numbersCon = confirm("Do you want to include numbers? Yes (OK) or No (Cancel)");

    var specialsCon = confirm("Do you want to include special characters? Yes (OK) or No (Cancel)");
  }

  var pwResponse = "";

  for (var i = 0; i <= pwLength; i++) {
     pwResponse = pwResponse + abcCaps.charAt(Math.floor(Math.random() * Math.floor(abcCaps.length - 1)));
    
  }
  

  
  
  
  
  
  
  
  
  
  
  
  
  return(pwResponse);

  
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
