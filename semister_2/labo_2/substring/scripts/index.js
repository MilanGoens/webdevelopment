const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let txtInput = document.getElementById("txtInput");
    let button = document.getElementById("button");
    let beginNummer = document.getElementById("beginNummer");
    let eindeNummer = document.getElementById("eindeNummer");
    let txtOutput = document.getElementById("txtOutput");

    const substringWoord = (begin, einde) =>{
        begin = parseInt(beginNummer.value);
        einde =  parseInt(eindeNummer.value);
        let substring = txtInput.value.substring(begin, einde);
        txtOutput.innerHTML= substring;
    }

    button.addEventListener('click', substringWoord);
}

window.addEventListener("load", setup);