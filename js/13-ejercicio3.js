'use strict'

var numero1=parseInt(prompt("digite el primer numero"));
var numero2=parseInt(prompt("digite el segundo numero"));

for(var i=numero1; i<numero2; i++) {
    if (i>numero1){
    console.log("El numero esta entre " + numero1 + " y " + numero2 + " es " + i);
    }
}