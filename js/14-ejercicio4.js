'use strict'

var numero1=parseInt(prompt("digite el primer numero",0));
var numero2=parseInt(prompt("digite el segundo numero",0));

document.write("<h1>El numero esta entre " + numero1 + " y " + numero2 + "</h1>");
for(var i=numero1; i<numero2; i++) {
    if (i>numero1 && i % 2 >0){
    document.write("El numero non que esta entre " + numero1 + " y " + numero2 + " es " + i + "</br>");
    document.write(i % 2 + "</br>");
    }
}