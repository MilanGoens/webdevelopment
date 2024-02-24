const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let btnKopieer = document.getElementById("btnKopieer");
    let txtOutput = document.getElementById("txtOutput");
    const kopieer = () => {
        let txtInput = document.getElementById("txtInput");
        let tekst = txtInput.value;
        let input = txtOutput.innerHTML = tekst;
    }
    btnKopieer.addEventListener('click', kopieer);

}

window.addEventListener("load", setup);