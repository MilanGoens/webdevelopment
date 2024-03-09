const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let button = document.getElementById("button");
    button.addEventListener("click", spaties);
}

const spaties = () => {
    let stringWaarde = document.getElementById("string").value;
    let stringSpaties = "";
    stringWaarde = stringWaarde.replaceAll(" ", "");
    for (let i = 0; i < stringWaarde.length; i++) {
        if (i === stringWaarde.length){
            stringSpaties += stringWaarde.charAt(i);
        } else {
            stringSpaties += stringWaarde.charAt(i) + " ";

        }
    }
    console.log(stringSpaties);
}

window.addEventListener("load", setup);