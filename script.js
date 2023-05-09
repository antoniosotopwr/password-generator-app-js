"use strict";

const labelPassword = document.querySelector(".card__password");
const labelLenghtPassword = document.querySelector(".card__passwordLenght");
const slider = document.querySelector(".card__slider");
const btnGeneratePassword = document.querySelector(".card__btn");

const displayLenghtPassword = () => {
  labelLenghtPassword.textContent = slider.value;
};
