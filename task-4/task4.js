//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

let $enterButton = document.querySelector(".enter-button");

$enterButton.onclick = function (event) {
    console.log(getQuantityNumbers());
    verifiedListItem();
    createListItem(getQuantityNumbers());
    insertRandomNumber();
    event.preventDefault();
};

function getQuantityNumbers() {
    return Number(document.querySelector(".quantity-numbers").value);
}

function createListItem(quantity) {
    for (let i = 0; i < quantity; i++) {
        let $li = document.createElement("li");
        $li.setAttribute("class", "number-list-item");
        insertListItem($li);
    }
}

function insertListItem(listItem) {
    let $olFather = document.querySelector(".numbers-lists");
    $olFather.appendChild(listItem);
}

function insertRandomNumber() {
    let $liNumbers = document.querySelectorAll(".number-list-item");
    for (let i = 0; i < $liNumbers.length; i++) {
        $liNumbers[i].innerText = Math.round(Math.random() * 10);
    }
}

function verifiedListItem() {
    let $liNumbers = document.querySelectorAll(".number-list-item");

    $liNumbers.length !== 0 ? clearElement($liNumbers) : "";
}

function clearElement(element) {
    for (let i = 0; i < element.length; i++) {
        element[i].remove();
    }
}


let $calculateButton = document.querySelector(".calculate-button");

$calculateButton.onclick = function() {

    

}