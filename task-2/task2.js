//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

let $submitButton = document.querySelector(".submit-button");

$submitButton.onclick = function (event) {
    let userInformation = getUserInformation();
    showUserInformation(userInformation);

    event.preventDefault();
};

function getUserInformation() {
    const inputsClassName = [
        "first-name",
        "middle-name",
        "last-name",
        "user-age",
    ];
    const userInformation = [];
    for (let i = 0; i < inputsClassName.length; i++) {
        let userValue = document.querySelector(`.${inputsClassName[i]}`).value;
        if (isNaN(userValue)) {
            userInformation.push(userValue);
        } else {
            userInformation.push(Number(userValue));
        }
    }
    return userInformation;
}

function showUserInformation(userInformation) {
    let inputsClassName = [
        "show-first-name",
        "show-middle-name",
        "show-last-name",
        "show-age",
    ];

    for (let i = 0; i < inputsClassName.length; i++) {

        document.querySelector(`#${inputsClassName[i]}`).value = userInformation[i];

    }

}
