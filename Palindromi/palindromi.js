// Pyydetään syöte käyttäjältä
var input = require("readline-sync");
var sana = input.question("Anna sana:");

// Oletetaan, että sana on palindromi
var onkoPalindromi = true;

// Käydään merkit läpi alusta ja lopusta
for (var i = 0; i < sana.length / 2; i++) {
  if (sana[i] !== sana[sana.length - 1 - i]) {
    onkoPalindromi = false;
    break;
  }
}

// Tulostetaan tulos
if (onkoPalindromi) {
  console.log('Sana "' + sana + '" on palindromi.');
} else {
  console.log('Sana "' + sana + '" ei ole palindromi.');
}
