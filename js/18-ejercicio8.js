'use strict'

var numero1= -1;
var numero2= -1;

while(numero1<0 || numero2<0 || isNaN(numero1) || isNaN(numero2)){
    numero1= parseInt(prompt("digite el primer numero",0));   
    numero2= parseInt(prompt("digite el segundo numero",0));
}


    var resultado=("La suma de " + numero1 + " mas " + numero2 + " = " + (numero1 + numero2) + "<br/>" +
    "La resta de " + numero1 + " menos " + numero2 + " = " + (numero1 - numero2) + " <br/>" +
    "La multiplicacion de " + numero1 + " por " + numero2 + " = " + (numero1 * numero2) + "<br/>" +
    "La division de " + numero1 + " entre " + numero2 + " = " + (numero1 / numero2) );
    

    var resultadoCMD=("La suma de " + numero1 + " mas " + numero2 + " = " + (numero1 + numero2) + " \n" +
    "La resta de " + numero1 + " menos " + numero2 + " = " + (numero1 - numero2) + " \n" +
    "La multiplicacion de " + numero1 + " por " + numero2 + " = " + (numero1 * numero2) + " \n" +
    "La division de " + numero1 + " entre " + numero2 + " = " + (numero1 / numero2) );    
    document.write(resultado);
    alert(resultadoCMD);
    console.log(resultadoCMD);