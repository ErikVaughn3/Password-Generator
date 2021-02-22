// Assignment code here
var arraySplit = "";
var quitApp = false;
var userInput = "";
var finalPassword = "";
var displayPassword = "";

var passwordCriteria = {
  lowercase: { indexNumber: 0 , criteria: "abcdefghijklmnopqrstuvwxyz"
  },
  uppercase: { indexNumber: 1 , criteria: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  },
  numeric: { indexNumber: 2 , criteria: "0123456789"
  },
  symbols: { indexNumber: 3 , criteria: "!\"#$%^&()*+=<>[]/_-|~`.?"
  }
}
var generatePassword = function() {

  arraySplit = "";
  quitApp = false;
  userInput = "";
  finalPassword = "";
  displayPassword = "";

  window.alert("Password criteria includes: lowercase, uppercase, numeric, and/or special characters.");

  var validInput = true;

  while(validInput) {
    userInput = window.prompt("Choose criteria for your password (you may select more than one): 1=lowercase 2=uppercase 3=numeric 4=special characters.\n");
    if (userInput) {
      window.alert("If you wish to exit this application, please close the password generator tab in your browser.")
      generatePassword();
    } else if (userInput) {

      userInput = userInput.split(" ");
      arraySplit = userInput.slice(0,userInput.length);
      window.alert("You have selected: " + arraySplit);
      validInput = false;
      
      for (var i = 0; i < userInput.length; i++) {
        var inputCriteria = userInput[i];
        var inputCriteriaInteger = parseInt(inputCriteria);
        switch(inputCriteriaInteger) {
          case 1:
          case 2:
          case 3:
          case 4:
            break;
          default:
            if (inputCriteriaInteger) {
              window.alert("Please select password criteria using corresponding numbers seperated by one space.\nRestarting application");
              generatePassword();
            }
            else {
              window.alert("Please select criteria using corresponding numbers seprated by one space.\n\n" + "User input: " + inputCriteria + " is invalid");
              generatePassword();
            }
        }
      }
      
    }
  }


}
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  arraySplit = "";
  quitApp = false;
  userInput = "";
  finalPassword = "";
  displayPassword = "";
  var password = generatePassword();
  var passwordLength = passwordLength();
  displayPassword = generatePasswordRandom(userInput,passwordLength);

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  document.getElementById("password").readOnly = false;
  document.getElementById("password").value = displayPassword;
  document.getElementById("password").readOnly = true;

}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
