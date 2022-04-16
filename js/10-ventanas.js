'use strict'

// alerta
alert("Esta es mi alerta");
alert("Este es mi texto");

// confirmacion
var mi_resultado = confirm("¿Estas seguro de querer continuar?");
console.log(mi_resultado);

// ingreso de datos

var mi_resultado = prompt("Que edad tienes", 18);
console.log(mi_resultado); // este resultado siempre sera un string
console.log(typeof mi_resultado);
var x=0;
x=parseInt(mi_resultado);
console.log(typeof x);
