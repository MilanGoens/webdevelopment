const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    gemeenten();
}
const gemeenten = () => {
    let gemeente = "";
    let gemeenten = [];
    let gevonden = false;
    while (!gevonden){
        gemeente = window.prompt("Gemeente", "stop");
        if (gemeente === 'stop'){
            gevonden = true;
        } else {
            gemeenten.push(gemeente);
        }
    }
    gemeenten.sort();
    let optie = "";
    let meerkeuze = document.getElementById("gemeenten")
    for (let i = 0; i < gemeenten.length; i++) {
        optie = gemeenten[i];
        meerkeuze.innerHTML += `<option value="${optie}" name="gemeenten">${optie}</option>`;
    }
}

window.addEventListener("load", setup);