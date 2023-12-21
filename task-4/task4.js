//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

let $enterButton = document.querySelector(".enter-button");

$enterButton.onclick = function (event) {
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

//funciones calcular

let $calculateButton = document.querySelector(".calculate-button");

$calculateButton.onclick = function (event) {

    const arrayNumbers = getListNumbers();
    let averageNumbers = calculateAverageNumbers(arrayNumbers);
    let lowestNumber = findLowestNumber(arrayNumbers);
    let highNumber = findHighNumber(arrayNumbers);
    let mostFrequent = findMostFrequent(arrayNumbers);
    printResults(averageNumbers,lowestNumber,highNumber,mostFrequent);

    event.preventDefault();
};

function getListNumbers() {
    let $listNumbers = document.querySelectorAll(".number-list-item");
    let arrayNumbers = [];

    for (let i = 0; i < $listNumbers.length; i++) {
        arrayNumbers.push(Number($listNumbers[i].innerText));
    }

    return arrayNumbers;
}

function calculateAverageNumbers(arrayNumbers) {
    let accumulator = 0;
    for (let i = 0; i < arrayNumbers.length; i++) {
        accumulator += arrayNumbers[i];
    }
    return accumulator / arrayNumbers.length;
}

function findLowestNumber(arrayNumbers) {
    let lowestNumber = arrayNumbers[0];

    for (let i = 0; i < arrayNumbers.length; i++) {

        lowestNumber = arrayNumbers[i] < lowestNumber 
        ? arrayNumbers[i] : lowestNumber;
    }
    return lowestNumber;
}

function findHighNumber(arrayNumbers) {
    let highNumber = 0;

    for (let i = 0; i < arrayNumbers.length; i++) {

        highNumber = arrayNumbers[i] > highNumber 
        ? arrayNumbers[i] : highNumber;
    }
    return highNumber;
}

function findMostFrequent(arrayNumbers) {
    let mostFrequent = arrayNumbers[0];
    let highCounter = 0;

    for (let i = 0; i < arrayNumbers.length; i++) {
        let counter = 0;

        for (let j = 0; j < arrayNumbers.length; j++) {
            if (arrayNumbers[i] === arrayNumbers[j]) {
                counter++;
            }
        }

        if (counter > highCounter) {
            highCounter = counter;
            mostFrequent = arrayNumbers[i];
        }
    }
    return mostFrequent;
}

function printResults(averageNumbers,lowestNumber,higherNumber,mostFrequent) {

    let $averageNumbers = document.querySelector(".average-numbers");
    let $lowestNumber = document.querySelector(".lowest-number");
    let $higherNumber = document.querySelector(".higher-number");
    let $mostFrequent = document.querySelector(".most-frequent");

    $averageNumbers.innerText = `El promedio es: ${averageNumbers}`;
    $lowestNumber.innerText = `El número más pequeño es: ${lowestNumber}`;
    $higherNumber.innerText = `El número más grande es: ${higherNumber}`;
    $mostFrequent.innerText = `El número más frecuente es: ${mostFrequent}`

}
