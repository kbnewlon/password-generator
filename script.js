// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//When I click button then I will begin code
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

//prompt user asking lengh of password

var userPasswordLength = prompt("Please pick a password length between 8 and 128.");
if(userPasswordLength<8 || userPasswordLength>128){
  alert("Invalid character, please try again");
}
// confirm true of false which characters the user wants to use

var userLower = confirm("Do you want to use lower case characters?");

var userUpper = confirm("Do you want to use upper case characters?");

var userNumber = confirm("Do you want to use numbers?");

var userSymbol = confirm("Do you want to use symbols?");

//create a for loop that repeats as many characters as the user imputted
for (let i = 0; i < userPasswordLength; i++) {

    if(userLower==true){
      const element = getRandomLower     //what?????
    }
    if


 

//defining all the functions together for final array

const randomChars = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

//Uses browser character set.Lowercase is 97-122 
 function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()* 26) + 97);

 }
 //Uppercase is 65-90
 function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()* 26) + 65);
 }
 //Numbers char are 48-57
 function getRandomNumber (){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
 }
 //Symbol string can be entered manually 
 function getRandomSymbol (){
   const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}







  

}




  


console.log(userSymbol());


//TODO: Create the generatePassword function that returns the final password and all of my cose should live inside this function

//TODO: After I'm done with the prompt I have to create the password

//TODO: Create var that contains final arrays with all needed characters (lowercase, uppercase, numbers, special characters)

//TODO: Create final array with confirmed characters (using if statement)our final collection based on the user's answer to how long they want the length of their password to be

//TODO: Select the spcific number of char randomly from the final array

//I can usse Math.floor(Math.random()) to get a random number 
//for loop to the length of the selected char var for(var i=0; i<(charLenghPrompt); i++)

//TODO: Add validations to make sure at least one type of character is selected and alert the user if there are no types being selected

//TODO: Add validation to the length to make sure it is bettwen 8-128 characters








