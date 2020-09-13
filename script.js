// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  //prompt user asking lengh of password
  var userPasswordLength = prompt("Please pick a password length between 8 and 128.");

  
  while (isNaN(userPasswordLength) || userPasswordLength < 8 || userPasswordLength > 128) {
    alert("Invalid character, please try again");
    userPasswordLength = prompt("Please pick a password length between 8 and 128.");
  }
  
  // confirm true of false which characters the user wants to use

  var userLower = confirm("Do you want to use lower case characters?");

  var userUpper = confirm("Do you want to use upper case characters?");

  var userNumber = confirm("Do you want to use numbers?");

  var userSymbol = confirm("Do you want to use symbols?");

  while(!userLower && !userUpper && !userNumber && !userSymbol ) {
    userLower = confirm("Do you want to use lower case characters?");

    userUpper = confirm("Do you want to use upper case characters?");

    userNumber = confirm("Do you want to use numbers?");

    userSymbol = confirm("Do you want to use symbols?");
  }

  var password = generatePassword(userPasswordLength, userLower, userUpper, userNumber, userSymbol);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//When I click button then I will begin code
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

//create a for loop that repeats as many characters as the user imputted
function generatePassword(length, lower, upper, number, symbol) {
  var tempPassword = "";
  var tempCount = lower + upper + number + symbol;
  console.log(tempCount);
  for (var i = 0; i < length; i += tempCount) {

    if (lower === true) {
      tempPassword += getRandomLower();

    }
    if (upper === true) {
      tempPassword += getRandomUpper();
    }
    if (number === true) {
      tempPassword += getRandomNumber();
    }
    if (symbol === true) {
      tempPassword += getRandomSymbol();
    }


  }
  return tempPassword.slice(0, length);
};

//tempCount combines the characters for the final array
//then runs through the if statements to get the users inputs
//return with the final password

//functions are set up to mix up the arrays and produce a randdom character. 

function getRandomLower() {
  var randomLower = lower.sort(()=> Math.random() - 0.5);
  var randomLowerEl = randomLower[0];
  console.log(randomLowerEl);
  return randomLowerEl;
}

function getRandomUpper() {
  var randomUpper = upper.sort(()=> Math.random() - 0.5);
  var randomUpperEl = randomUpper[0];
  console.log(randomUpperEl);
  return randomUpperEl;
}

function getRandomNumber() {
  var randomNumber = number.sort(()=> Math.random() - 0.5);
  var randomNumberEl = randomNumber[0];
  console.log(randomNumberEl);
  return randomNumberEl;
}

function getRandomSymbol() {
  var randomSymbol = symbol.sort(()=> Math.random() - 0.5);
  var randomSymbolEl = randomSymbol[0];
  console.log(randomSymbolEl);
  return randomSymbolEl;
  
}

const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbol = "!@#$%^&*(){}[]=<>/,.';".split('');

