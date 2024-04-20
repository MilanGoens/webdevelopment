let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    let valid = valideer();

    if (valid === 0){
        let voornaam = document.getElementById("txtVoornaam").value;
        let naam = document.getElementById("txtFamilienaam").value;
        let geboorte = document.getElementById("txtGeboorteDatum").value;
        let email = document.getElementById("txtEmail").value;
        let aantal = document.getElementById("txtAantalKinderen").value;

        let persoon = {
            pvoornaam: voornaam,
            pnaam: naam,
            pgeboorteDatum: geboorte,
            pmail: email,
            paantalKinderen: aantal
        }

        let lijst = document.getElementById("lstPersonen");

        if (lijst.selectedIndex < 0){
            personen.push(persoon);
            let optie = document.createElement("option");
            optie.value = voornaam + " " + naam;
            optie.innerText = voornaam + " " + naam;
            lijst.appendChild(optie);
        } else {
            personen[lijst.selectedIndex] = persoon;
            let opties = document.querySelectorAll("option")
            let verander = opties[lijst.selectedIndex];
            verander.value = voornaam + " " + naam;
            verander.innerText = voornaam + " " + naam;
        }

    } else {
        console.log("De gegevens kloppen niet helemaal.")
    }

    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan



    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";

    let opties = document.querySelectorAll("option")
    for (let i = 0; i < opties; i++) {
        opties[i].selected = false;
    }
};

const toonPersoon = (voornaam) => {
    let persoon = document.getElementById("lstPersonen").selectedIndex;

    let info = personen[persoon];

        document.getElementById("txtVoornaam").value = info.pvoornaam;
        document.getElementById("txtFamilienaam").value = info.pnaam;
        document.getElementById("txtGeboorteDatum").value = info.pgeboorteDatum;
        document.getElementById("txtEmail").value = info.pmail;
        document.getElementById("txtAantalKinderen").value = info.paantalKinderen;

}



// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
    lstPersonen.addEventListener("click", toonPersoon);
};

window.addEventListener("load", setup);