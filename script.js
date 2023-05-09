"use strict";
//Elements
const labelPassword = document.querySelector(".card__password");
const labelLenghtPassword = document.querySelector(".card__passwordLenght");
let sliderInput = document.querySelector(".card__slider");
const btnGeneratePassword = document.querySelector(".card__btn");

const squareLevel4 = document.querySelector(".level--4");

const chkUpperInput = document.querySelector(".checkboxUpper");
const chkLowerInput = document.querySelector(".checkboxLower");
const chkNumberInput = document.querySelector(".checkboxNumbers");
const chkSymbolInput = document.querySelector(".checkboxSymbols");

//Functions
//Function to display the current value of the slider with oninput property
let sliderNumber = 1;
const displayLenghtPassword = () => {
  labelLenghtPassword.textContent = sliderInput.value;
  sliderNumber = Number(sliderInput.value);

  //check the passwordLenght to change square colors and border
  if (sliderNumber === 20) {
    squareLevel4.classList.add("colorLevel");
  } else {
    squareLevel4.classList.remove("colorLevel");
  }
};

//Function to check checkboxes
btnGeneratePassword.addEventListener("click", function () {
  if (chkUpperInput.checked && chkLowerInput.checked) {
    console.log("Upper and Lower");
  } else if (chkUpperInput.checked) {
    console.log("Only upper");
  }
});
