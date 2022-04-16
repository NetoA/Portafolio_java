'use strict'

// operadores
var numero1 = 7;
var numero2 =12;
var operacion =numero1 + numero2;

alert("El resultado de la operacion suma es: " + operacion);
var operacion =numero1 - numero2;
alert("El resultado de la operacion resta es: " + operacion); 
var operacion =numero1 * numero2;
alert("El resultado de la operacion multiplicacion es: " + operacion);
var operacion =numero1 / numero2;
alert("El resultado de la operacion division es: " + operacion);
var operacion =numero1 % numero2;
alert("El resultado de la operacion del resto de la division es: " + operacion);
// tipos de datos

var numero_entero =44;
var cadena_de_texto = 'hola "que" tal';
var verdadero_o_falso = true;
var numero_falso = "33.1";


console.log(numero_entero);
console.log(cadena_de_texto);
console.log(verdadero_o_falso);
console.log(Number(numero_falso) + 7.1); //numero real
console.log(parseInt(numero_falso) + 7.1); //numero entero

console.log(String(numero_entero) + 4 +' texto concactenado');

console.log(typeof numero_entero);
console.log(typeof verdadero_o_falso);
console.log(typeof numero_falso);
console.log(typeof cadena_de_texto);
