const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let button = document.getElementById('button');
    button.addEventListener('click', controleren);
}

const controleren = () => {
    let roker = document.getElementById('roker').checked;
    let frans = document.getElementById('frans').checked;
    let nederlands = document.getElementById('nederlands').checked;
    let engels = document.getElementById('engels').checked;
    let buurland = document.getElementById('buurland').value;
    let bestelling = document.getElementById('bestelling').options;

    if (roker){
        console.log('is een roker')
    } else {
        console.log('is geen roker')
    }
    if (frans){
        console.log('moedertaal is fr')
    } else if (nederlands){
        console.log('moedertaal is nl')
    } else if (engels){
        console.log('moedertaal is eng')
    } else {
        console.log('Je bent vergeten een moedertaal aan te duiden, dus zal er geen worden vertoond.')
    }
    console.log(`favoriete buurland is ${buurland}`)
    let besteldeItems = '';
    for (let i = 0; i < bestelling.length; i++) {
        if(bestelling[i].selected){
            besteldeItems += bestelling[i].value + ' ';
        }
    }
    besteldeItems.trim();
    if (besteldeItems === ''){
        console.log('Je bent vergeten iets aan je bestelling toe te voegen!')
    } else {
        console.log(`bestelling bestaat uit ${besteldeItems}`)

    }
}
window.addEventListener("load", setup);