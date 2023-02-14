// Assignment code here
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "/", "'"];
var choices = [];
var passwordLength = 8-128;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  getPrompts();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function getPrompts() {
  passwordLength = parseInt(prompt("How long do you want your password to be? (8 - 128 characters)"));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid entry. Please enter password length (8 - 128 characters)");
    return false;
  }
  if (confirm("Do you want uppercase letters in your password?")) {
    choices = choices.concat(upperCase);
  }
  if (confirm("Do you want lowercase letters in your password?")) {
    choices = choices.concat(lowerCase);
  }
  if (confirm("Do you want numbers in your password?")) {
    choices = choices.concat(numbers);
  }
  if (confirm("Do you want symbols if your password?")) {
    choices = choices.concat(symbols);
  }
  return true;
}

function generatePassword() {
  var password = "";
  for(var i = 0; i < passwordLength; i++) {
    var randomPassword = Math.floor(Math.random() * choices.length);
    password = password + choices[randomPassword];
  }
  return password;
}
//