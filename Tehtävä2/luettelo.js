const readline = require("readline-sync");

// Luodaan taulukko, johon tiedot tallennetaan
const luettelo = [];

// Funktio jolla haetaan nimen perusteella numero
function haePuhelinnumero(taulukko, haettavaNimi) {
  for (let henkilo of taulukko) {
    if (henkilo.nimi.toLowerCase() === haettavaNimi.toLowerCase()) {
      return henkilo.nro;
    }
  }
  return null;
}

// Pääohjelma silmukka, jossa tallennetaan tiedot ja haetaan tietoja
let kaynnissa = true;

while (kaynnissa) {
  console.log("1. Lisää henkilö");
  console.log("2. Hae numero");
  console.log("3. Lopeta");

  // Luetaan käyttäjän valinta
  let valinta = readline.question("Valitse haluttu toiminto (1-3): ");

  // Jos valinta on 1, pyydetään nimi + puh.nro. ja lisätään ne taulukkoon
  if (valinta === "1") {
    let nimi = readline.question("Anna nimi: ");
    let nro = readline.question("Anna puh.nro.: ");
    luettelo.push({ nimi, nro });
    console.log("Henkilö lisätty!");
  }

  // Suoritetaan haku funktio nimen perusteella
  else if (valinta === "2") {
    let haettava = readline.question("Anna haettava nimi: ");
    let tulos = haePuhelinnumero(luettelo, haettava);

    // Jos henkilö löytyy tulostetaan vastaus
    if (tulos !== null) {
      console.log(` Henkilö löytyi! Henkilön ${haettava} numero on: ${tulos}`);
    }

    // Jos henkilöä ei löydy
    else {
      console.log("Henkilöä ei löytynyt.");
    }
  }

  // Suljetaan ohjelma
  else if (valinta === "3") {
    kaynnissa = false;
    console.log("Kiitos ohjelman käytöstä!");
  }

  // Virheellinen syöte
  else {
    console.log("Virheellinen valinta, yritä uudelleen.");
  }
}
