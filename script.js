"use strict";

const charArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "r",
  "s",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "{",
  "|",
  "}",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "R",
  "S",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "@",
  "[",
  "/",
  "]",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "!",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "?",
  "<",
  ">",
  ",",
  ".",
  ";",
  ":",
  "+",
  "=",
  "-",
  "_",
  " ",
];

const btnGenerate = document.querySelector(".btn-generate");
const outputField = document.querySelector(".output-field");
const inputField = document.querySelector(".input-field");

btnGenerate.addEventListener("click", function () {
  const input = +inputField.value;
  if (input > 5 && input < 21) {
    const passwordMax = input;
    let password = "";
    outputField.innerHTML = "";

    for (let i = 0; i < passwordMax; i++) {
      let randomPosition = Math.floor(Math.random() * charArr.length);

      password === charArr.slice(randomPosition, randomPosition + 1)
        ? (password += charArr.slice(randomPosition, randomPosition + 2))
        : (password += charArr.slice(randomPosition, randomPosition + 1));
    }
    outputField.innerHTML = password;
  }
});
