// Variable assignment, all different variable combinbation for user choice
var generateBtn = document.querySelector("#generate");
var abcCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcLower = "abcdefghijklmnopqrstuvwxyz";
var number = "1234567890";
var special = "!#$%&'()*+,-./:;<=>?@[/]^_`{|}~";
var allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!#$%&'()*+,-./:;<=>?@[/]^_`{|}~";
var abcUpperLower = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var abcAllNums = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
var abcAllSpecial = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[/]^_`{|}~";
var abcCapsNumSpecial = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&'()*+,-./:;<=>?@[/]^_`{|}~";
var abcLowerNumSpecial = "abcdefghijklmnopqrstuvwxyz1234567890!#$%&'()*+,-./:;<=>?@[/]^_`{|}~";
var abcUpperNums = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
var abcUpperSpecial = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[/]^_`{|}~";
var abcLowerNums = "abcdefghijklmnopqrstuvwxyz1234567890";
var abcLowerSpecial = "abcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[/]^_`{|}~";
var numsSpecial = "1234567890!#$%&'()*+,-./:;<=>?@[/]^_`{|}~";
var pwResponse = "";

// Primary function to determine PW parameters
function generatePassword() {
// Prompt and confirm loop for users to choose password parameters
 var pwLength = Number(prompt("Choose password length - Pick between 8 and 128 characters"));

  while (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) pwLength = Number(prompt("Length must be between 8-128 characters - Please enter value between 8-128"));
   
  var upperCon = confirm("Do you want to include uppercase letters? Yes (OK) or No (Cancel)");
 
  var lowerCon = confirm("Do you want to unclude lowercase letters? Yes (OK) or No (Cancel)");
 
  var numbersCon = confirm("Do you want to include numbers? Yes (OK) or No (Cancel)");

  var specialsCon = confirm("Do you want to include special characters? Yes (OK) or No (Cancel)");

  while (!upperCon && !lowerCon && !numbersCon && !specialsCon) {
    alert("You must select a character type");
    
    var upperCon = confirm("Do you want to include uppercase letters? Yes (OK) or No (Cancel)");
 
    var lowerCon = confirm("Do you want to unclude lowercase letters? Yes (OK) or No (Cancel)");
 
    var numbersCon = confirm("Do you want to include numbers? Yes (OK) or No (Cancel)");

    var specialsCon = confirm("Do you want to include special characters? Yes (OK) or No (Cancel)");
  }

// Logic to determine what to output based on user choice
  if (upperCon && lowerCon && numbersCon && specialsCon) {
    for (var i = 0; i < pwLength; i++) {
      pwResponse = pwResponse + allChars.charAt(Math.floor(Math.random() * Math.floor(allChars.length - 1)));
     }   
  }

 else if (upperCon && lowerCon && numbersCon) {
    for (var i = 0; i < pwLength; i++) {
      pwResponse = pwResponse + abcAllNums.charAt(Math.floor(Math.random() * Math.floor(abcAllNums.length - 1)));
      }   
  }

  else if (upperCon && lowerCon && specialsCon) {
    for (var i = 0; i < pwLength; i++) {
      pwResponse = pwResponse + abcAllSpecial.charAt(Math.floor(Math.random() * Math.floor(abcAllSpecial.length - 1)));
      }   
  }
 
  else if (upperCon && numbersCon && specialsCon) {
    for (var i = 0; i < pwLength; i++) {
      pwResponse = pwResponse + abcCapsNumSpecial.charAt(Math.floor(Math.random() * Math.floor(abcCapsNumSpecial.length - 1)));
      }   
  }
  
  else if (lowerCon && numbersCon && specialsCon) {
    for (var i = 0; i < pwLength; i++) {
      pwResponse = pwResponse + abcLowerNumSpecial.charAt(Math.floor(Math.random() * Math.floor(abcLowerNumSpecial.length - 1)));
      }   
  }
  
  else if (upperCon && lowerCon) {
    for (var i = 0; i < pwLength; i++) {
      pwResponse = pwResponse + abcUpperLower.charAt(Math.floor(Math.random() * Math.floor(abcUpperLower.length - 1)));
      }   
  }
  
  else if (upperCon && numbersCon) {
    for (var i = 0; i < pwLength; i++) {
      pwResponse = pwResponse + abcUpperNums.charAt(Math.floor(Math.random() * Math.floor(abcUpperNums.length - 1)));
      }   
  }
  
  else if (upperCon && specialsCon) {
    for (var i = 0; i < pwLength; i++) {
      pwResponse = pwResponse + abcUpperSpecial.charAt(Math.floor(Math.random() * Math.floor(abcUpperSpecial.length - 1)));
      }   
  }
 
  else if (lowerCon && numbersCon) {
    for (var i = 0; i < pwLength; i++) {
      pwResponse = pwResponse + abcLowerNums.charAt(Math.floor(Math.random() * Math.floor(abcLowerNums.length - 1)));
      }   
  }
 
  else if (lowerCon && specialsCon) {
    for (var i = 0; i < pwLength; i++) {
      pwResponse = pwResponse + abcLowerSpecial.charAt(Math.floor(Math.random() * Math.floor(abcLowerSpecial.length - 1)));
      }   
  }
 
  else if (numbersCon && specialsCon) {
    for (var i = 0; i < pwLength; i++) {
      pwResponse = pwResponse + numsSpecial.charAt(Math.floor(Math.random() * Math.floor(numsSpecial.length - 1)));
      }   
  }
  else if (upperCon) {
    for (var i = 0; i < pwLength; i++) {
      pwResponse = pwResponse + abcCaps.charAt(Math.floor(Math.random() * Math.floor(abcCaps.length - 1)));
      }   
  }
 
  else if (lowerCon) {
    for (var i = 0; i < pwLength; i++) {
      pwResponse = pwResponse + abcLower.charAt(Math.floor(Math.random() * Math.floor(abcLower.length - 1)));
      }   
  }
 
  else if (numbersCon) {
    for (var i = 0; i < pwLength; i++) {
      pwResponse = pwResponse + number.charAt(Math.floor(Math.random() * Math.floor(number.length - 1)));
      }   
  }
  
  else if (specialsCon) {
    for (var i = 0; i < pwLength; i++) {
      pwResponse = pwResponse + special.charAt(Math.floor(Math.random() * Math.floor(special.length - 1)));
      }   
  }
 // Submits text to user
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
