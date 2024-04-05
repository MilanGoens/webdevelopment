let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    GESELECTEERDE_KAARTEN: []
};

const randomArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
const setup = () => {
    let array = ["kaart1.jpg", "kaart2.jpg", "kaart3.jpg", "kaart4.jpg", "kaart5.jpg", "kaart6.jpg"];
    array = randomArray(array);
    let memory = document.getElementById("memory");

    for (let i = 0; i < global.AANTAL_VERTICAAL; i++) {
        for (let j = 0; j < global.AANTAL_HORIZONTAAL; j++) {
            let kaart = document.createElement("div");
            kaart.className = "kaart";
            kaart.dataset.image = array[(i * global.AANTAL_HORIZONTAAL + j) % array.length];
            kaart.style.backgroundImage = `url('images/achterkant.png')`;

            memory.appendChild(kaart);
            kaart.addEventListener("click", kiesKaart);
        }
    }
}

const kiesKaart = (event) => {
    let kaart = event.target;
    if (!kaart.classList.contains("draaien") && global.GESELECTEERDE_KAARTEN.length < 2) {
        kaart.classList.add("draaien");
        kaart.style.backgroundImage = `url("images/${kaart.dataset.image}")`;

        global.GESELECTEERDE_KAARTEN.push(kaart);

        if (global.GESELECTEERDE_KAARTEN.length === 2) {
            setTimeout(matchendeKaarten, 1000);

        }
    }
}

const matchendeKaarten = () => {
    let gedraaideKaarten = global.GESELECTEERDE_KAARTEN;
    if (gedraaideKaarten.length === 2) {
        let [kaart1, kaart2] = gedraaideKaarten;
        if (kaart1.dataset.image === kaart2.dataset.image) {
            coverKaartje(kaart1)
            coverKaartje(kaart2)

            global.GESELECTEERDE_KAARTEN = [];

            if (document.querySelectorAll(".kaart").length === 0) {
                eindeSpel();
            }
        } else {
            kaart1.classList.add("fout");
            kaart2.classList.add("fout");

            setTimeout(() => {
                kaart1.classList.remove("fout");
                kaart2.classList.remove("fout");
                kaart1.classList.remove("draaien");
                kaart2.classList.remove("draaien");
                kaart1.style.backgroundImage = `url("images/achterkant.jpg")`;
                kaart2.style.backgroundImage = `url("images/achterkant.jpg")`;
            }, 500);
        }
        global.GESELECTEERDE_KAARTEN = [];
    }
}

const coverKaartje = (kaart) => {
    let plek = document.createElement("div");
    plek.className = "kaartCover";
    kaart.parentElement.replaceChild(plek, kaart);
}

const eindeSpel = () => {
    alert("Proficiat");
}

window.addEventListener("load", setup);
