const setup = () => {
	test();
    let button = document.getElementById("test")
    button.addEventListener("click", hey);
}

const test = () => {
    let karts = [];
    let kart = "";
    let gevonden = false;
    while (!gevonden){
        kart = window.prompt("Geef een kart", "onbekend");
        if (kart === "stop"){
            gevonden = true;
        } else {
            karts.push(kart);
        }
    }
    let optie = "";
    for (let i = 0; i < karts.length; i++) {
        optie = karts[i];
        meerkeuze = document.getElementById("karten");
        meerkeuze.innerHTML += `<option value="${optie}" name="karten">${optie}</option>`;
    }


    let kartje = "";
    let kartGevonden = false
    let i = 0;
    while (!kartGevonden && i < karts.length){
        kartje = karts[i];
        if (kartje === "kart"){
            gevonden = true;
        } else {
            i++;
        }
    }
    if(!kartGevonden){
        document.getElementById("gokart").style.display = "none";
    }


}

const hey = () => {
    console.log("hey");
}

window.addEventListener("load", setup);