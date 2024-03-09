const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let button = document.getElementById("button");
    button.addEventListener("click", spaties);
}
const spaties = () => {
    let stringWaarde = document.getElementById("string").value;
    console.log(maakMetSpaties(stringWaarde));
}

const maakMetSpaties = (string) => {
    let stringWaarde = string;
    let stringSpaties = "";
    stringWaarde = stringWaarde.replaceAll(" ", "");
    for (let i = 0; i < stringWaarde.length; i++) {
        if (i === stringWaarde.length){
            stringSpaties += stringWaarde.charAt(i);
        } else {
            stringSpaties += stringWaarde.charAt(i) + " ";

        }
    }
    return stringSpaties;
}

window.addEventListener("load", setup);