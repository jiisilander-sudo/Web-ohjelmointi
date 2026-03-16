// Pyydetään syöte käyttäjältä
var input = require("readline-sync");
var sana = input.question("Anna sana:");

// Funktio, joka käy merkit läpi alusta ja lopusta
function onkoPalindromi(sana) {
  for (var i = 0; i < sana.length / 2; i++) {
    if (sana[i] !== sana[sana.length - 1 - i]) {
      return false; // Jos sana ei ole palindromi
    }
  }
  return true; // Jos sana on palindromi
}

var tulos = onkoPalindromi(sana);
console.log("Onko palindromi: ", tulos);
