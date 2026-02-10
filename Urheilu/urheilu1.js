// Henkilö-luokka
class Henkilo {
  constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi) {
    this.etunimet = etunimet;
    this.sukunimi = sukunimi;
    this.kutsumanimi = kutsumanimi;
    this.syntymavuosi = syntymavuosi;
  }
  // Metodi, jolla kutsutaan Henkilö-luokan tietoja
  henkiloTiedot() {
    console.log(` Henkilön tiedot: -----------
        Etunimet: ${this.etunimet} 
        Sukunimi: ${this.sukunimi} 
        Kutsumanimi: ${this.kutsumanimi} 
        Syntymävuosi: ${this.syntymavuosi}`);
  }
}
// Urheilija luokka, joka perii Henkilö-luokan tiedot
class Urheilija extends Henkilo {
  constructor(
    etunimet,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    linkkiKuvaan,
    paino,
    laji,
    saavutukset,
  ) {
    super(etunimet, sukunimi, kutsumanimi, syntymavuosi); // Kutsuu Henkilö-luokan tiedot
    // Urheilija-luokan ominaisuudet
    this.linkkiKuvaan = linkkiKuvaan;
    this.omaPaino = paino;
    this.laji = laji;
    this.saavutukset = saavutukset;
  }
  get paino() {
    // get-metodit
    return this.omaPaino;
  }
  get omalaji() {
    return this.laji;
  }
  get mitalit() {
    return this.saavutukset;
  }
  get kuva() {
    return this.linkkiKuvaan;
  }
  set paino(uusiPaino) {
    // set-metodit
    this.omaPaino = uusiPaino;
  }
  set urheilulaji(uusiLaji) {
    this.laji = uusiLaji;
  }
  set mitalit(uusiMitali) {
    this.saavutukset = uusiMitali;
  }
}
// Esimerkit urheilijoista
const u = new Urheilija(
  "Mika Pauli",
  "Häkkinen",
  "Mika",
  1968,
  "https://fi.wikipedia.org/wiki/Mika_H%C3%A4kkinen#/media/Tiedosto:Mika_H%C3%A4kkinen_Champions_for_Charity_2016-07-27.jpg",
  70,
  "Formula 1",
  "Maailmanmestari 1998 ja 1999",
);
const u1 = new Urheilija(
  "Stephen Gregory",
  "Yzerman",
  "Steve",
  1965,
  "https://upload.wikimedia.org/wikipedia/commons/2/2e/Steve_Yzerman_%28Columbus_OH%2C_2005%29.jpg",
  85,
  "Jääkiekko",
  "Olympiakulta 2002, Stanley Cup 1997, 1998 ja 2002",
);
// Peritty metodi Henkilö-luokasta
u.henkiloTiedot();
// Get-metodit Urheilijalle
console.log(`   -------------------------      
        Paino: ${u.paino} 
        Laji: ${u.omalaji} 
        Saavutukset: ${u.mitalit} 
        Linkki kuvaan: ${u.kuva}`);
console.log();
// Set-metodit urheilijalle
u1.uusiPaino = 80;
u1.uusiLaji = "Valmentaja";
u1.uusiMitali = "MM 2007";
// Peritty metodi Henkilö-luokasta
u1.henkiloTiedot();
// Urheilijan tiedot uusilla
console.log(`   -------------------------
        Paino: ${u1.uusiPaino} 
        Laji: ${u1.uusiLaji} 
        Saavutukset: ${u1.uusiMitali} 
        Linkki kuvaan: ${u1.kuva}`);
