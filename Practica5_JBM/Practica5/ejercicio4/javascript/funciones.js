
function calcular() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operador = document.getElementById("operador").value;
    let resultado;
    switch (operador) {
        case "sumar":
            resultado = num1 + num2;
            break;
        case "restar":
            resultado = num1 - num2;
            break;
        case "multiplicar":
            resultado = num1 * num2;
            break;
        case "dividir":
            resultado = num1 / num2;
            break;
        default:
            resultado = "Operador no encontrado";
    }
    document.getElementById("resultado").value = resultado;
}
