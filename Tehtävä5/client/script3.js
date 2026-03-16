let editModal; // Muuttuja modaaliselle ikkunalle

// Odotetaan, että DOM on ladattu ennen kuin yritetään hakea modaalista ikkunaa
document.addEventListener("DOMContentLoaded", () => {
  // Haetaan ikkuna DOM:sta sen id:n perusteella
  const modalElement = document.getElementById("editModal");
  // Luodaan uusi Bootstrap Modal
  if (modalElement) {
    editModal = new bootstrap.Modal(modalElement); // Luodaan uusi Bootstrap Modal
  }
  const checkInput = document.getElementById("muokkaaPuhelin");
  // Tarkistetaan syöte
  if (checkInput) {
    checkInput.addEventListener("input", function () {
      this.value = this.value.replace(/[^0-9+\-]/g, ""); // Salli vain numerot, plus- ja miinusmerkit
    });
  }
});
// Funktio, joka hakee käyttäjätiedot id:n perusteella
updateRow = (id) => {
  // Tehdään fetch-pyyntö, joka hakee käyttäjätiedot id:n perusteella
  fetch(`http://localhost:3000/items/${id}`)
    // Muutetaan vastaus JSON-muotoon
    .then((res) => res.json())
    // Käyttäjätiedot saatu, asetetaan ne ikkunan kenttiin
    .then((user) => {
      document.getElementById("muokkaaId").value = user.id;
      document.getElementById("muokkaaNimi").value = user.nimi;
      document.getElementById("muokkaaPuhelin").value = user.puhelin;
      // Näytetään käyttäjätiedot
      editModal.show();
    });
};
// Funktio, joka sulkee ikkunan
closePopup = () => {
  // Suljetaan ikkuna
  editModal.hide();
};
// Funktio, joka tallentaa päivitetyt käyttäjätiedot
saveUser = () => {
  // Haetaan id, jonka perusteella tiedot päivitetään
  const id = document.getElementById("muokkaaId").value;
  // Luodaan user-objekti, joka sisältää päivitetyt tiedot
  const user = {
    nimi: document.getElementById("muokkaaNimi").value, // Haetaan nimi
    puhelin: document.getElementById("muokkaaPuhelin").value, // Haetaan puhelin
  };
  // Tehdään fetch-pyyntö, joka lähettää päivitetyt tiedot palvelimelle
  fetch(`http://localhost:3000/items/${id}`, {
    // Käytetään PUT-metodia, joka on päivittäämiseen tarkoitettu HTTP-metodi
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    // Muutetaan user-objekti JSON-muotoon, jotta se voidaan lähettää palvelimelle
    body: JSON.stringify(user),
  })
    .then((res) => {
      if (res.ok) {
        // Suljetaan ikkuna tallennuksen jälkeen
        editModal.hide();
        // Päivitetään taulukko
        if (typeof loadPage === "function") {
          loadPage();
        }
      }
    })
    // Virheenkäsittely
    .catch((err) => console.error("Virhe tallennettaessa:", err));
};
