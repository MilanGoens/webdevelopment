const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    window.alert("Dit is een mededeling");
    let confirm = window.confirm("Weet u het zeker?");
    console.log(confirm);
    let naam = window.prompt("Wat is uw naam", "onbekend");
    console.log(naam);
}

window.addEventListener("load", setup);