// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //prompt user asking lengh of password

  var userPasswordLength = prompt("Please pick a password length between 8 and 128.");
  if (userPasswordLength < 8 || userPasswordLength > 128) {
    alert("Invalid character, please try again");
  }

  // confirm true of false which characters the user wants to use

  var userLower = confirm("Do you want to use lower case characters?");

  var userUpper = confirm("Do you want to use upper case characters?");

  var userNumber = confirm("Do you want to use numbers?");

  var userSymbol = confirm("Do you want to use symbols?");
  var password = generatePassword(userPasswordLength, userLower, userUpper, userNumber, userSymbol);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

//When I click button then I will begin code

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)





//create a for loop that repeats as many characters as the user imputted
function generatePassword(length, lower, upper, number, symbol) {
  //console.log(length);
  var tempPassword = "";
  var tempCount = lower + upper + number + symbol;
  console.log(tempCount);
  for (var i = 0; i < length; i += tempCount) {

    if (lower === true) {
      tempPassword += getRandomLower();

    }
    if (upper=== true) {
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


//defining all the functions together for final array


//Uses browser character set.Lowercase is 97-122 
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

}
//Uppercase is 65-90
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
//Numbers char are 48-57
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
//Symbol string can be entered manually 
function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}








