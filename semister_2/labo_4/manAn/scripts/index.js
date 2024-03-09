const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let button = document.getElementById("button");
    button.addEventListener("click", an);
}

const an = () => {
    let stringWaarde = document.getElementById("string").value.toLowerCase();
    let aantalAn = 0;

    stringWaarde = stringWaarde.trim();
    for (let i = 0; i < stringWaarde.length; i++) {
        if (stringWaarde.charAt(i) === "a" && stringWaarde.charAt(i+1) === "n"){
            aantalAn++;
        }
    }
    console.log(aantalAn);
}

window.addEventListener("load", setup);