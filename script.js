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

//--ARRAYS
const upperArray = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]; //25,26
const lowerArray = [..."abcdefghijklmnopqrstuvwxyz"]; //25,26
const numbersArray = [..."0123456789"]; //9,10
const symbolsArray = [..."!@#$%^&*?"]; // 8,9

const upperLowerArray = [upperArray, lowerArray];
const upperLowerNumberArray = [upperArray, lowerArray, numbersArray];
// console.log(upperLowerNumberArray[2]);
//--FUNCTIONS
let password = "";
let sliderNumber = 1;
let chosenArray = 0;
let letter = "";

//generate a random num between 0...N-1
const randomNum = (max) => {
  return Math.trunc(Math.random() * max) + 1 - 1;
};

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

//it should be from greater options to lower
// (first the 4 option, then all the 3 posible combinations, then 2 and so on)

//analice where add the none option
// (if at first or if it could be the default case(but i guess it should be the first one))

//function to check checkboxes (only checkboxes first)
btnGeneratePassword.addEventListener("click", function () {
  if (
    chkUpperInput.checked &&
    chkLowerInput.checked &&
    chkNumberInput.checked &&
    chkSymbolInput.checked
  ) {
    console.log("Upper,Lower, Number and Symbol (all)");
  }
  //--- 3 OPTIONS ---
  // 1 1 1 0
  else if (
    chkUpperInput.checked &&
    chkLowerInput.checked &&
    chkNumberInput.checked
  ) {
    console.log("Upper,Lower and number");
  }
  // 0 1 1 1
  else if (
    chkLowerInput.checked &&
    chkNumberInput.checked &&
    chkSymbolInput.checked
  ) {
    console.log("Lower, number and symbol");
  }
  // 1 0 1 1
  else if (
    chkUpperInput.checked &&
    chkNumberInput.checked &&
    chkSymbolInput.checked
  ) {
    console.log("upper, number and symbol");
  }
  // 1 1 0 1
  else if (
    chkUpperInput.checked &&
    chkLowerInput.checked &&
    chkSymbolInput.checked
  ) {
    console.log("upper, lower and symbol");
  }
  //---2 options
  else if (chkUpperInput.checked && chkLowerInput.checked) {
    console.log("Upper and Lower");
  } else if (chkUpperInput.checked && chkNumberInput.checked) {
    console.log("Upper and number");
  } else if (chkUpperInput.checked) {
    console.log("Only upper");
  } else {
    console.log("Default case");
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

//I DONT KNOW WHAT WAS THIS XD
// for (let i = 1; i <= 6; i++) {
//   console.log(`iteration: ${i}`);
//   for (let j = 1; i <= 6; i++) {
//     chosenArray = upperLowerNumberArray[randomNum(3)];
//     // console.log(chosenArray);
//     if (chosenArray === upperArray) {
//       letter = upperArray[randomNum(26)];
//       console.log(`Letter: ${letter}`);
//     } else if (chosenArray === lowerArray) {
//       letter = lowerArray[randomNum(26)];
//       console.log(`Letter: ${letter}`);
//     }else if(chosenArray === numbersArray){
//       letter = numbersArray[randomNum(10)];
//       console.log(`Letter: ${letter}`);
//     }
//     password = password + letter;
//   }
// }
// console.log(`Password:${password}, lenght:${password.length}`);
// password = "";
// letter = "";

//to do
//se if we can create a function with both for loops for dry principle
