// variables que almacenan los dos numeros de la suma//
var num1, num2;
// variables que almacenan la respuesta//
var respuestas;
// variables que almacenan la opcion correcta//
var indiceopcorrecta;
txt_resta = document.getElementById("multiplicar");
opc1 = document.getElementById("opc1");
opc2 = document.getElementById("opc2");
opc3 = document.getElementById("opc3");
txt_msjr = document.getElementById("msj");
txt_resultados = document.getElementById("resultado");

function comenzarr() {
    // cada vez quw inicia limpia los campos
    txt_resultados.innerHTML = "?";
    txt_msjr.innerHTML = "";

    //genero la suma aleatoria entre 10 y 30//
    num1 = Math.round(Math.random() * 10);
    num2 = Math.round(Math.random() * 10);
    respuestas = num1 * num2;

    //asignamos la suma para que se visualice //
    txt_resta.innerHTML = num1 + " * " + num2 + " = ";

    // genero un numero entre 0 y 2 para colocar la opcion correcta
    indiceopcorrecta = Math.round(Math.random() * 2);
    // evaluamos respuesta correcta con un condicional

    if (indiceopcorrecta == 0) {
        opc1.innerHTML = respuestas;
        // al resto se lesda numeros cercanos a la respuesta correcta
        opc2.innerHTML = respuestas + 1;
        opc3.innerHTML = respuestas - 1;
    }
    if (indiceopcorrecta == 1) { // pongo respuesta correcta en la segunda posicion
        opc2.innerHTML = respuestas;
        // al resto se lesda numeros cercanos a la respuesta correcta
        opc1.innerHTML = respuestas + 2;
        opc3.innerHTML = respuestas - 1;
    }
    if (indiceopcorrecta == 2) { // pongo respuesta correcta en la tercera posicion
        opc3.innerHTML = respuestas;
        // al resto se lesda numeros cercanos a la respuesta correcta
        opc1.innerHTML = respuestas + 1;
        opc2.innerHTML = respuestas - 1;
    }
}
// funcion que evalua la respuesta elegida por el usuario

function controlar_respuestas(opcion_elegida) {
    // cargar respuesta
    txt_resultados.innerHTML = opcion_elegida.innerHTML;
    //verificamos respuesta si esta bien
    if (respuestas == opcion_elegida.innerHTML) {
        txt_msjr.innerHTML = "Exelente!!!";
        txt_msjr.style.color = " darkgreen";
        setTimeout(comenzarr, 3000);
    } else {
        txt_msjr.innerHTML = "Incorrecta";
        txt_msjr.style.color = "red";
        setTimeout(limpiarr, 3000);

    }

    function limpiarr() {
        txt_resultados.innerHTML = "?";
        txt_msjr.innerHTML = "";

    }
}

comenzarr();