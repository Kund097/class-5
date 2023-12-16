//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>

let $calculateButton = document.querySelector("#calculate-button");

$calculateButton.onclick = function (event) {
    let annualSalary = getAnnualSalary();
    let monthlySalary = calculateMonthlySalary(annualSalary);
    displayMonthlySalary(monthlySalary);
    
    //displayMonthlySalary(calculateMonthlySalary(getAnnualSalary()));

    event.preventDefault();
};

function calculateMonthlySalary(annualSalary) {
    const MONTHS_OF_THE_YEAR = 12;

    return annualSalary / MONTHS_OF_THE_YEAR;
}

function getAnnualSalary() {
    return Number(document.querySelector(".annual-salary").value);
}

function displayMonthlySalary(monthlySalary) {
    document.querySelector(
        "#monthly-salary"
    ).value = `Salario mensual:  ${monthlySalary}`;
}
