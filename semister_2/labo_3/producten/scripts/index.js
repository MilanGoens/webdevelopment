const setup = () => {
    let herberekenen = document.getElementsByClassName("herberekenen")
    herberekenen[0].addEventListener("click", update)
}
window.addEventListener("load", setup);

const update = () => {
    let data = document.getElementsByClassName("data")

    let bereken1 = Math.round(data[0].textContent * data[1].value * (1+ (data[2].textContent/100)))
    data[3].innerHTML = bereken1.toString() + " Eur"
    let bereken2 = Math.round(data[4].textContent * data[5].value * (1+ (data[6].textContent/100)))
    data[7].innerHTML = bereken2.toString() + " Eur"
    let bereken3 = Math.round(data[8].textContent * data[9].value * (1+ (data[10].textContent/100)))
    data[11].innerHTML = bereken3.toString() + " Eur"
    data[12].innerHTML = (bereken1 + bereken2 + bereken3) + " Eur"
}