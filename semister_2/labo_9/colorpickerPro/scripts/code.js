let kleurenArray = [];
const setup = () => {
	let sliders = document.getElementsByClassName("slider");
	for (let i = 0; i < sliders.length; i++)
	{
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	let btnSave = document.getElementById("btnSave");
	btnSave.addEventListener("click", save);

	update();
	kleurGegevens();
};
const update = () => {
	let settingsJson;

	let vierkant = document.querySelector(".vierkant");
	let sliders = document.querySelectorAll(".slider");
	let valueRood = sliders[0].value;
	let valueGroen = sliders[1].value;
	let valueBlauw = sliders[2].value;

	vierkant.style.backgroundColor = "rgb(" + valueRood + "," + valueGroen + "," + valueBlauw + ")";

	let span = document.getElementsByTagName("span");
	span[0].textContent = "Rood " + valueRood;
	span[1].textContent = "Groen " + valueGroen;
	span[2].textContent = "Blauw " + valueBlauw;

	settingsJson = JSON.stringify({valueRood,valueGroen,valueBlauw});
	localStorage.setItem("sliders", settingsJson);
};
const save = () => {
	let settingsJson;

	let opgeslagen = localStorage.getItem("opgeslagen");
	let kleurenArray = JSON.parse(opgeslagen || '[]');

	let kleur = document.getElementsByClassName("vierkant");
	let sliders = document.getElementsByClassName("slider");
	let valueRood = sliders[0].value;
	let valueGroen = sliders[1].value;
	let valueBlauw = sliders[2].value;

	maakVierkant(valueRood, valueGroen, valueBlauw);

	kleur[kleur.length - 1].style.backgroundColor = "rgb(" + valueRood + "," + valueGroen + "," + valueBlauw + ")";

	kleurenArray.push({
		valueRood, valueGroen, valueBlauw
	});
	settingsJson = JSON.stringify(kleurenArray);
	localStorage.setItem("opgeslagen", settingsJson);

	klik();
};
const kleurGegevens = () => {
	let opgeslagenSliders = localStorage.getItem("sliders");
	let opgeslagen = localStorage.getItem("opgeslagen");

	if (opgeslagenSliders)
	{
		let gegevens = JSON.parse(opgeslagenSliders);

		document.getElementById("slider1").value = gegevens.valueRood;
		document.getElementById("slider2").value = gegevens.valueGroen;
		document.getElementById("slider3").value = gegevens.valueBlauw;

		update();
	}

	if (opgeslagen)
	{
		const settings = JSON.parse(opgeslagen);
		kleurenArray.push(...settings);
		settings.forEach(setting => {
			maakVierkant(setting.valueRood, setting.valueGroen, setting.valueBlauw);
		});
	}
};
const maakVierkant = (valueRood,valueGroen,valueBlauw) =>{
	let nieuwVierkant = document.createElement("div");
	let binnenNieuwVierkant = document.createElement("div");
	binnenNieuwVierkant.className = "vierkant";
	nieuwVierkant.className = "nieuwVierkant";
	binnenNieuwVierkant.style.backgroundColor =`rgb(${valueRood},${valueGroen},${valueBlauw})`;

	let btnVerwijder = document.createElement("input");
	btnVerwijder.className = "deleteVierkant"
	btnVerwijder.setAttribute("type", "button");
	btnVerwijder.setAttribute("value", "x");
	btnVerwijder.addEventListener("click", deleteVierkant);

	binnenNieuwVierkant.appendChild(btnVerwijder);
	nieuwVierkant.appendChild(binnenNieuwVierkant);
	document.body.appendChild(nieuwVierkant);
	klik();
};
const deleteVierkant = (event) => {
	let verwijderElement = event.target.closest(".nieuwVierkant");

	verwijderElement.remove();

	let opgeslagen = localStorage.getItem("opgeslagen");
	let kleurenArray = JSON.parse(opgeslagen || '[]');

	let index = kleurenArray.findIndex(setting =>
		setting.valueRood === verwijderElement.querySelector(".vierkant").style.backgroundColor.split(",")[0].trim() &&
		setting.valueGroen === verwijderElement.querySelector(".vierkant").style.backgroundColor.split(",")[1].trim() &&
		setting.valueBlauw === verwijderElement.querySelector(".vierkant").style.backgroundColor.split(",")[2].trim()
	);

	if
	(index !== -1) {
		kleurenArray.splice(index,1);
		localStorage.setItem("opgeslagen", JSON.stringify(kleurenArray));
	}
};
const klik = () => {
	let klik = document.getElementsByClassName("vierkant");
	for (let i = 0; i < klik.length; i++)
	{
		klik[i].addEventListener("click", kleurVierkant);
	}
};
const kleurVierkant = (event) => {
	let backgroundColor = event.target.closest(".vierkant").style.backgroundColor;
	let rgb = backgroundColor.slice(21).trim().replace("(", "").replace(")", "").replace(";", "").split(",");

	let red = rgb[0];
	let green = rgb[1];
	let blue = rgb[2];

	event.target.closest(".vierkant").style.backgroundColor = "rgb(" + valueRood + "," + valueGroen + "," + valueBlauw + ")";

	let span = document.getElementsByTagName("span");
	span[0].textContent = "Rood " + red;
	span[1].textContent = "Groen " + green;
	span[2].textContent = "Blauw " + blue;
	let elementSlider = document.querySelectorAll(".slider");
	elementSlider[0].value = red;
	elementSlider[1].value = green;
	elementSlider[2].value = blue;
};
window.addEventListener("load", setup);