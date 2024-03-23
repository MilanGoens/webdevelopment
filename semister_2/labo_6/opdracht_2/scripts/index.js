const setup = () => {
    verander();
}

const verander = () => {
    const elementen = document.querySelectorAll("li");

    for (let i = 0; i < elementen.length; i++){
        elementen[i].setAttribute("class", "listitem");
    }
    const foto = document.createElement("img");
    foto.src = "images/kartsjaja.jpg";
    document.body.appendChild(foto);

}

window.addEventListener("load", setup);