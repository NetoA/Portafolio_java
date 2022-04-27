'use strict'

var numero=parseInt(prompt("digite su numero",0));
document.write("<h1>Los divisores de " + numero + "</h1>");
for(var i=1; i<=numero; i++){
    if(numero % i == 0){
        document.write("  " +  i + " es divisor de: "+ numero + "</br>");
    }
}