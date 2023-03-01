function validarInputs() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    if (num1 !== "" && num2 !== "") {
        if (parseInt(num1) < parseInt(num2)) {
            alert("Correto: B é maior que A!");
        } else {
            alert("O Valor de B precisar ser maior que de A!");
        }
    } else {
        alert("Error: Você precisa digitar os valores!");
    }
}