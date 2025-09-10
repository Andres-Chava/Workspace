function sumar(){
    let suma1 = document.getElementById("sumando1");
    let suma2 = document.getElementById("sumando2");

    let resultado = parseInt(suma1.value) + parseInt(suma2.value);

    let resultadohtml = document.getElementById("resultadoSuma");
    resultadohtml.innerHTML = (resultado);
    alert(resultado);
}

function restar(){
    let minuendo = document.getElementById("minuendo");
    let sustraendo = document.getElementById("sustraendo");

    let resultado = parseInt(minuendo.value) - parseInt(sustraendo.value);

    let resultadohtml = document.getElementById("resultadoResta");
    resultadohtml.innerHTML = (resultado);
    alert(resultado);
}

function multiplicacion(){
    let factor1 = document.getElementById("factor1");
    let factor2 = document.getElementById("factor2");

    let resultado = parseInt(factor1.value) * parseInt(factor2.value);

    let resultadohtml = document.getElementById("resultadoProducto");
    resultadohtml.innerHTML = (resultado);
    alert(resultado);
}

function dividir(){
    let dividido = document.getElementById("dividido");
    let dividendo = document.getElementById("dividendo");

    let resultado = parseFloat(dividido.value) / parseFloat(dividendo.value);

    let resultadohtml = document.getElementById("resultadoDivision");
    resultadohtml.innerHTML = (resultado);
    alert(resultado);
}