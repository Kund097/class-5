//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

let $enterButton = document.querySelector(".enter-button");
$enterButton.onclick = function (event) {
    verifiedInputs();
    $elements = createElements(getNumberOfVideos());
    insertElements($elements);

    event.preventDefault();
};

function getNumberOfVideos() {
    return Number(document.querySelector(".number-of-videos").value);
}

function createElements(quantityElements) {
    let $divFather = document.createElement("div");
    $divFather.setAttribute("class","div-father");
    const textPlaceholder = ["Horas", "Minutos", "Segundos"];
    const inputClassName = ["hours", "minutes", "seconds"];

    for (let j = 0; j < quantityElements; j++) {
        $label = document.createElement("label");
        $label.innerText = `Video #${j+1}`;
        $divFather.appendChild($label);

        for (let i = 0; i < inputClassName.length; i++) {
            $input = document.createElement("input");
            $input.setAttribute("placeholder", `${textPlaceholder[i]}`);
            $input.setAttribute("type", "number");
            $input.setAttribute("class", `${inputClassName[i]}`);
            $divFather.appendChild($input);
        }

        $divFather.appendChild(document.createElement("br"));
    }


    console.log($divFather);

    return $divFather;
}

function insertElements($elements) {
    let $divInputTime = document.querySelector(".inputs-time");

    $divInputTime.appendChild($elements);
}

function clearInputs() {

    document.querySelector(".div-father").remove();

}

function verifiedInputs() {
    let $divFather = document.querySelectorAll(".div-father");
    if($divFather.length !== 0){
        clearInputs();
    }
}