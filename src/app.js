/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let syllables1 = [
    "Ba",
    "Ca",
    "Da",
    "Fa",
    "Ga",
    "Ha",
    "Ja",
    "Ka",
    "La",
    "Ma",
    "Na",
    "Pa",
    "Ra",
    "Sa",
    "Ta",
    "Va",
    "Wa",
    "Ya",
    "Za",
    "Sha",
    "Cha",
    "Tha",
    "Bra",
    "Kra",
    "Tra",
    "Pla",
    "Fra",
    "Gra",
    "Sma",
    "Spa"
  ];
  let syllables2 = [
    "ab",
    "ac",
    "ad",
    "af",
    "ag",
    "eb",
    "ec",
    "ed",
    "ef",
    "eg",
    "ib",
    "ic",
    "id",
    "if",
    "ig",
    "ob",
    "oc",
    "od",
    "of",
    "og",
    "ub",
    "uc",
    "ud",
    "uf",
    "ug",
    "ib",
    "im",
    "il",
    "in",
    "ir"
  ];
  let syllables3 = [
    "ast",
    "end",
    "ist",
    "int",
    "ant",
    "ond",
    "ing",
    "est",
    "ent",
    "ang",
    "ust",
    "ond",
    "ist",
    "unt",
    "ong",
    "elt",
    "ult",
    "ost",
    "ift",
    "ilt",
    "and",
    "apt",
    "ext",
    "oft",
    "olt",
    "ind",
    "ect",
    "apt",
    "est",
    "ump"
  ];

  // Function to generate a random word from the syllables
  function generateRandomWord() {
    let randomSyllable1 =
      syllables1[Math.floor(Math.random() * syllables1.length)];
    let randomSyllable2 =
      syllables2[Math.floor(Math.random() * syllables2.length)];
    let randomSyllable3 =
      syllables3[Math.floor(Math.random() * syllables3.length)];

    // Combine the syllables
    const word = randomSyllable1 + randomSyllable2 + randomSyllable3;

    // Display the generated word
    document.getElementById("generatedWord").innerText = word;
  }
  for (let first of syllables1) {
    for (let second of syllables2) {
      for (let third of syllables3) {
        console.log(first + second + third);
      }
    }
  }
  // Event listener to the button
  document
    .getElementById("generateButton")
    .addEventListener("click", generateRandomWord);
};
