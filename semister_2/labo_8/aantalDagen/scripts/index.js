const global = {
    VERJAARDAG: new Date('2005-09-08T03:00:00'),
    VANDAAG: new Date()
};

const setup = () => {
    let aantalMillisec = global.VANDAAG - global.VERJAARDAG;

    let aantalDagen = Math.floor(aantalMillisec / (1000 * 3600 * 24));

    console.log(aantalDagen.toString());
}

window.addEventListener("load", setup);