const setup = () => {
	let button = document.getElementById("button");
    button.addEventListener("click", creerTekst)
}

const creerTekst = () => {
    let nieuweTekst = document.createElement("p");
    let divisie = document.querySelector("div");
    nieuweTekst.appendChild(document.createTextNode("Dit is een nieuwe paragraaf!"));
    divisie.appendChild(nieuweTekst);
}

window.addEventListener("load", setup);