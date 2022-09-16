// variables que almacenan los dos numeros de la suma//
var num1, num2;
// variables que almacenan la respuesta//
var respuesta;
// variables que almacenan la opcion correcta//
var indiceopcorrecta;
txt_suma = document.getElementById("suma");
op1 = document.getElementById("op1");
op2 = document.getElementById("op2");
op3 = document.getElementById("op3");
txt_msj = document.getElementById("msj");
txt_resultado = document.getElementById("resultado");

function comenzar() {
    // cada vez quw inicia limpia los campos
    txt_resultado.innerHTML = "?";
    txt_msj.innerHTML = "";

    //genero la suma aleatoria entre 10 y 30//
    num1 = Math.round(Math.random() * 30);
    num2 = Math.round(Math.random() * 20);
    respuesta = num1 + num2;

    //asignamos la suma para que se visualice //
    txt_suma.innerHTML = num1 + " + " + num2 + " = ";

    // genero un numero entre 0 y 2 para colocar la opcion correcta
    indiceopcorrecta = Math.round(Math.random() * 2);
    // evaluamos respuesta correcta con un condicional

    if (indiceopcorrecta == 0) {
        op1.innerHTML = respuesta;
        // al resto se lesda numeros cercanos a la respuesta correcta
        op2.innerHTML = respuesta + 1;
        op3.innerHTML = respuesta - 1;
    }
    if (indiceopcorrecta == 1) { // pongo respuesta correcta en la segunda posicion
        op2.innerHTML = respuesta;
        // al resto se lesda numeros cercanos a la respuesta correcta
        op1.innerHTML = respuesta + 2;
        op3.innerHTML = respuesta - 1;
    }
    if (indiceopcorrecta == 2) { // pongo respuesta correcta en la tercera posicion
        op3.innerHTML = respuesta;
        // al resto se lesda numeros cercanos a la respuesta correcta
        op1.innerHTML = respuesta + 1;
        op2.innerHTML = respuesta - 1;
    }
}
// funcion que evalua la respuesta elegida por el usuario

function controlar_respuesta(opcion_elegida) {
    // cargar respuesta
    txt_resultado.innerHTML = opcion_elegida.innerHTML;
    //verificamos respuesta si esta bien
    if (respuesta == opcion_elegida.innerHTML) {
        txt_msj.innerHTML = "Exelente!!!";
        txt_msj.style.color = " darkgreen";
        setTimeout(comenzar, 3000);
    } else {
        txt_msj.innerHTML = "Incorrecta";
        txt_msj.style.color = "red";
        setTimeout(limpiar, 3000);

    }

    function limpiar() {
        txt_resultado.innerHTML = "?";
        txt_msj.innerHTML = "";

    }
}

comenzar();