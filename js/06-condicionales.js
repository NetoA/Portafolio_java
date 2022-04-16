'use strict'

// Condicional if
// Si A es igual a B haz algo

var edad1 = 30;
var edad2 = 12;


// si pasa esto
if(edad1 > edad2){
	//Ejecuta esto
	console.log("edad1 es mayor que edad2");
}else{
	console.log("la edad1 es inferior");
}

var edad1 = 10;
var edad2 = 12;


// si pasa esto
if(edad1 > edad2){
	//Ejecuta esto
	console.log("edad1 es mayor que edad2");
}else{
	console.log("la edad1 es inferior");
}

var edad = 18;
var nombre = "Ernesto Aguirre";

/*
// operadores realcionales 
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Distinto: !=
*/

if(edad >= 18){
   console.log(nombre + ' tiene '+ edad + ' años, es mayor de edad' );
}else{
   console.log(nombre + ' tiene '+ edad + ' años, es menor de edad' );	
}

var edad = 19;
var nombre = "Ernesto Aguirre";

if(edad >= 18){
   console.log(nombre + ' tiene '+ edad + ' años, es mayor de edad' );

   if(edad <= 33){
   		console.log('Todavia es milenial');
   }else if(edad >= 70){
   	    console.log('es ruco');
   } else{
   	console.log('ya no es milenial');
   }
}else{
   console.log(nombre + ' tiene '+ edad + ' años, es menor de edad' );	
}

