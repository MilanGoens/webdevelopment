let familieleden = ['John', 'Johan', 'Johnny', 'Jarold', 'Jake'];
console.log(familieleden.length);
console.log(familieleden[0]);
console.log(familieleden[2]);
console.log(familieleden[4]);

const VoegNaamToe =(naam) =>{
    familieleden.push(naam);
}

let extraNaam = prompt("Type hier een naam om toe te voegen aan de lijst: ", "Onbekend");
VoegNaamToe(extraNaam);
console.log(familieleden);

console.log(familieleden.join());