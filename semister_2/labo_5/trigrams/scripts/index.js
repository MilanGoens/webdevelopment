const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let button = document.getElementById("button");
    button.addEventListener("click", splitsen);
}

const splitsen = () => {
    //let stringWaarde = document.getElementById("string").value;
    let stringWaarde = "onoorbaar";
    let stringDrie = "";
    let iEnd = 3;
    for (let i = 0; i < stringWaarde.length; i ++) {
        stringDrie = stringWaarde.slice(i, iEnd)
        iEnd ++;
        if(stringDrie.length === 3){
            console.log(stringDrie);
        }
    }

}

window.addEventListener("load", setup);