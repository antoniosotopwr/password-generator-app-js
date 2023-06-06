"use strict";
//--ELEMENTS
const labelPassword = document.querySelector(".card__password");
const labelLenghtPassword = document.querySelector(".card__passwordLenght");
let sliderInput = document.querySelector(".card__slider");
const btnGeneratePassword = document.querySelector(".card__btn");

const squareLevel4 = document.querySelector(".level--4");

const chkUpperInput = document.querySelector(".checkboxUpper");
const chkLowerInput = document.querySelector(".checkboxLower");
const chkNumberInput = document.querySelector(".checkboxNumbers");
const chkSymbolInput = document.querySelector(".checkboxSymbols");

//generate a random num between 0...N-1
const randomNum = (max) => {
  return Math.trunc(Math.random() * max) + 1 - 1;
};

//--ARRAYS
const upperArray = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]; //25,26
const lowerArray = [..."abcdefghijklmnopqrstuvwxyz"]; //25,26
const numbersArray = [..."0123456789"]; //9,10
const symbolsArray = [..."!@#$%^&*?"]; // 8,9

//--VARIABLES
let password = "";
let sliderNumber = 1;
let chosenArray = 0;
let letter = "";

//ARRAYS OF OPTIONS
//--4 array complete
const upperLowerNumberSymbolArray = [
  upperArray,
  lowerArray,
  numbersArray,
  symbolsArray,
];
//--3 arrays
const upperLowerNumberArray = [...upperArray,  ...numbersArray,...lowerArray];
const lowerNumberSymbolArray = [
  ...lowerArray,
  ...numbersArray,
  ...symbolsArray,
];
const upperNumberSymbolArray = [
  ...upperArray,
  ...numbersArray,
  ...symbolsArray,
];
const upperLowerSymbolArray = [...upperArray, ...lowerArray, ...symbolsArray];

//--2 arrays
const upperLowerArray = [upperArray, lowerArray];

//--TO DO
/*
1) add the squares colors in the validation of the lenght of the password or with certain checkboxes
2) find a way to reset the slider to the default when recharge the page
3) Try to apply the dry principle in the ifs of the password generations
4) Add the remaining validations for change the password
*/

//--To think about
/* 
When a specific array(number, upper, lower and symbol combination) is created
it is better to make it like array = [subArray1, subArray2,... N]
or it should be array = [...subArray1, ...subArray2, ...N]
*/

//Function to display the current value of the slider with oninput property
const displayLenghtPassword = () => {
  labelLenghtPassword.textContent = sliderInput.value;
  sliderNumber = Number(sliderInput.value);

  //check the passwordLenght to change square colors and border
  if (sliderNumber === 20) {
    squareLevel4.classList.add("colorLevel");
    //change label level (low -> very high)
  } else {
    squareLevel4.classList.remove("colorLevel");
  }
};

//analice where add the none option
// (if at first or if it could be the default case(but i guess it should be the first one))

const generatePassword = function (array, sliderLenght) {
  let chosenArrayLenght = array.length;
  for (let i = 1; i <= sliderLenght; i++) {
    letter = array[randomNum(chosenArrayLenght)];
    password = password + letter;
    console.log(password);
  }
  // console.log(`Password:${password}, lenght:${password.length}`);
  labelPassword.textContent = password;
  password = "";
  letter = "";
  chosenArrayLenght = 0;
};

//function to check checkboxes (only checkboxes first)
btnGeneratePassword.addEventListener("click", function () {
  if (
    chkUpperInput.checked &&
    chkLowerInput.checked &&
    chkNumberInput.checked &&
    chkSymbolInput.checked
  ) {
    console.log("Upper,Lower, Number and Symbol (all)");
    for (let i = 1; i <= sliderNumber; i++) {
      chosenArray = upperLowerNumberSymbolArray[randomNum(4)];
      if (chosenArray === upperArray) {
        letter = upperArray[randomNum(26)];
        console.log(`Letter: ${letter}`);
      } else if (chosenArray === lowerArray) {
        letter = lowerArray[randomNum(26)];
        console.log(`Letter: ${letter}`);
      } else if (chosenArray === numbersArray) {
        letter = numbersArray[randomNum(10)];
        console.log(`Letter: ${letter}`);
      } else if (chosenArray === symbolsArray) {
        letter = symbolsArray[randomNum(9)];
        console.log(`Letter: ${letter}`);
      }
      password = password + letter;
    }
    labelPassword.textContent = password;
    console.log(`Password:${password}, lenght:${password.length}`);
    password = "";
    letter = "";
  }
  //--- 3 OPTIONS ---
  // 1 1 1 0
  else if (
    chkUpperInput.checked &&
    chkLowerInput.checked &&
    chkNumberInput.checked
  ) {
    console.log("Upper,Lower and number");
    generatePassword(upperLowerNumberArray, sliderNumber);
    console.log(upperLowerNumberArray);
  }
  // 0 1 1 1
  else if (
    chkLowerInput.checked &&
    chkNumberInput.checked &&
    chkSymbolInput.checked
  ) {
    console.log("Lower, number and symbol");
    generatePassword(lowerNumberSymbolArray, sliderNumber);
  }
  // 1 0 1 1
  else if (
    chkUpperInput.checked &&
    chkNumberInput.checked &&
    chkSymbolInput.checked
  ) {
    generatePassword(upperNumberSymbolArray, sliderNumber);
    console.log("upper, number and symbol");
  }
  // 1 1 0 1
  else if (
    chkUpperInput.checked &&
    chkLowerInput.checked &&
    chkSymbolInput.checked
  ) {
    console.log("upper, lower and symbol");
    generatePassword(upperLowerSymbolArray, sliderNumber);
  }
  //---2 options
  // 1 1 0 0
  else if (chkUpperInput.checked && chkLowerInput.checked) {
    console.log("Upper and Lower");
    for (let i = 1; i <= sliderNumber; i++) {
      password = password + `${upperLowerArray[randomNum(2)][randomNum(26)]}`;
    }
    console.log(password);
    labelPassword.textContent = password;
    password = "";
  }
  // 0 0 1 1
  else if (chkNumberInput.checked && chkSymbolInput.checked) {
    console.log("Number and symbol");
  }
  // 1 0 1 0
  else if (chkUpperInput.checked && chkNumberInput.checked) {
    console.log("Upper and number");
  }
  // 0 1 0 1
  else if (chkLowerInput.checked && chkSymbolInput.checked) {
    console.log("Lower and symbol");
  }
  // 0 1 1 0
  else if (chkLowerInput.checked && chkNumberInput.checked) {
    console.log("Lower and number");
  }
  // 1 0 0 1
  else if (chkUpperInput.checked && chkSymbolInput.checked) {
    console.log("Upper and symbol");
  }
  //---1 options
  else if (chkUpperInput.checked) {
    console.log("Only upper");
  } else if (chkLowerInput.checked) {
    console.log("Only lower");
  } else if (chkNumberInput.checked) {
    console.log("Only Number");
  } else if (chkSymbolInput.checked) {
    console.log("Only symbol");
  } else {
    console.log("Please check at least one checkbox");
    alert("Please check at least one checkbox");
  }
});

//Function to check checkboxes (SOME WORKING-- NOT DELETE)
// btnGeneratePassword.addEventListener("click", function () {
//   if (
//     chkUpperInput.checked &&
//     chkLowerInput.checked &&
//     chkNumberInput.checked
//   ) {
//     console.log("Upper,Lower and number");

//     for (let i = 1; i <= sliderNumber; i++) {
//       console.log(`iteration: ${i}`);
//       for (let j = 1; i <= sliderNumber; i++) {
//         chosenArray = upperLowerNumberArray[randomNum(3)];
//         // console.log(chosenArray);
//         if (chosenArray === upperArray) {
//           letter = upperArray[randomNum(26)];
//           console.log(`Letter: ${letter}`);
//         } else if (chosenArray === lowerArray) {
//           letter = lowerArray[randomNum(26)];
//           console.log(`Letter: ${letter}`);
//         } else if (chosenArray === numbersArray) {
//           letter = numbersArray[randomNum(10)];
//           console.log(`Letter: ${letter}`);
//         }
//         password = password + letter;
//         labelPassword.textContent = password;
//       }
//     }
//     console.log(`Password:${password}, lenght:${password.length}`);
//     password = "";
//     letter = "";
//   } else if (chkUpperInput.checked && chkLowerInput.checked) {
//     console.log("Upper and Lower");
//     for (let i = 0; i < sliderNumber; i++) {
//       password = password + `${upperLowerArray[randomNum(2)][randomNum(26)]}`;
//     }
//     console.log(password);
//     labelPassword.textContent = password;
//     password = "";
//   } else if (chkUpperInput.checked) {
//     console.log("Only upper");
//     for (let i = 0; i < sliderNumber; i++) {
//       password = password + `${upperArray[randomNum(26)]}`;
//     }
//     console.log(password);
//     labelPassword.textContent = password;
//     password = "";
//   }
// });

// OLD WAYS OF GENERATE PASSWORDS
//I think this way is more efficent to generate accurate passwords (i guess)
/* 
this option need to declare their arrays like this
const upperLowerNumberArray = [upperArray, lowerArray, numbersArray];
whitout the spread operator in the sub arrays [...upperArray,...lowerArray]

1)-----------for 3 and 4 password checkboxes
for (let i = 1; i <= sliderNumber; i++) {
      chosenArray = upperLowerNumberArray[randomNum(3)];
      if (chosenArray === upperArray) {
        letter = upperArray[randomNum(26)];
        console.log(`Letter: ${letter}`);
      } else if (chosenArray === lowerArray) {
        letter = lowerArray[randomNum(26)];
        console.log(`Letter: ${letter}`);
      } else if (chosenArray === numbersArray) {
        letter = numbersArray[randomNum(10)];
        console.log(`Letter: ${letter}`);
      }
      password = password + letter;
    }
    labelPassword.textContent = password;
    console.log(`Password:${password}, lenght:${password.length}`);
    password = "";
    letter = "";
2)-------for 2 checkboxes option
for (let i = 1; i <= sliderNumber; i++) {
      password = password + `${upperLowerArray[randomNum(2)][randomNum(26)]}`;
    }
    console.log(password);
    labelPassword.textContent = password;
    password = "";
*/
