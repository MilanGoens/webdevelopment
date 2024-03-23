const setup = () => {
    let kiezen = document.getElementById("kippen");
    let letter = document.getElementById("letter");
    kiezen.addEventListener("change", keuze);
    letter.addEventListener("input", letterZoeken);
}

const keuze = () => {
    let kippen = document.getElementById("kippen").value;
    let foto = document.getElementById("img");
    let zin = document.getElementById("note");
    if (kippen === "met een ei"){
        foto.className = "with-egg"
        zin.textContent = `Hierboven, een kip ${kippen}`;
    } else if (kippen === "zonder een ei") {
        foto.className = "";
        zin.textContent = `Hierboven, een kip ${kippen}`;
    } else {
        foto.className ="hidden";
        zin.textContent = "";
    }


}

const letterZoeken = () => {
    let teken = document.getElementById("letter").value.toLowerCase();
    let zin = document.getElementById("note");
    let letterZin = document.getElementById("noteLetter");
    let aantal = 0;
    if (teken.length > 0){
        let zinLetters = zin.toLowerCase().trim();
        for (let i = 0; i < zinLetters.length; i++) {
            if (zinLetters.charAt(i) === teken){
                aantal++;
            }
        }
        letterZin.textContent = `Letter ${teken} komt ${aantal} keer voor in bovenstaande zin.`;
    } else {
        letterZin.textContent = "";
    }
}

window.addEventListener("load", setup);