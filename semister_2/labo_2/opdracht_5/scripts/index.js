const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let waarde = document.getElementById("txtOutput");
    let button = document.getElementById("button");
    const welkom = ()=> {
        waarde.innerHTML='Welkom!';
    }
    button.addEventListener('click', welkom);

}

window.addEventListener("load", setup);