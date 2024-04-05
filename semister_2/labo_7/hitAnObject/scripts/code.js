let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};
const setup = () => {
    const startKnop = document.getElementById("startKnop");
    startKnop.addEventListener("click", startSpel);
}
const startSpel = () => {
    let knop = document.getElementById("startKnop")
    knop.style.display = "none";
    let foto = document.getElementById("foto");
    foto.addEventListener("click", () => {
        if (foto.src.endsWith("0.png")) {
            spelVoorbij();
        } else {
            movePic();
            updateKlikHits();
        }
    });

    setInterval(bericht, 1000);
    setInterval(movePic, 1000);
};

const movePic = () => {

    let foto=document.getElementById("foto");
    let speelveld=document.getElementById("playField");
    let maxLeft=speelveld.clientWidth - foto.offsetWidth;
    let maxHeight=speelveld.clientHeight - foto.offsetHeight;

    let left=Math.floor(Math.random()*maxLeft);
    let top=Math.floor(Math.random()*maxHeight);
    foto.style.left=left+"px";
    foto.style.top=top+"px";

    const randomfoto = Math.floor(Math.random() * global.IMAGE_COUNT);
    foto.src = global.IMAGE_PATH_PREFIX + randomfoto + global.IMAGE_PATH_SUFFIX;
}

const bericht = () => {
    console.log("Elke seconde een bericht.");
}

let hits = 0;
const updateKlikHits = () => {
    hits++;
    score = hits;
    document.getElementById("klikcounter").textContent = score;
};

const spelVoorbij = () => {
    clearInterval(global.timeoutId);
    alert("GAME OVER");
    global.score = 0;
    document.getElementById("klikcounter").textContent = global.score;
};


window.addEventListener("load", setup);


