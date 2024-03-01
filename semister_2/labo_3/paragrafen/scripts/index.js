const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let txtBelangrijk = document.getElementsByClassName("belangrijk");
    for (let i = 0; i < txtBelangrijk.length; i++) {
        txtBelangrijk[i].classList.add("opvallend");
    }
}

window.addEventListener("load", setup);