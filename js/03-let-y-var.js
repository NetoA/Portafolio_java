'use strict'
//pruebas con let y var
alert("hola");

// prueba con var
var numero = 40;
console.log(numero); //valor = 40

if(true){
	var numero = 50;
	console.log(numero); //valor = 50
}

console.log(numero); //valor = 50

// prueba con let
var texto = "Curso js ERAGCO";
console.log(texto); // valor Curso js ERAGCO

if (true){
	let texto = "Curso Larvel 5";
	console.log(texto); // Valor Curso Larvel 5
}

console.log(texto); // valor Curso js ERAGCO