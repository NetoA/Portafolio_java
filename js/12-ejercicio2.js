'use strict'
var numero=0;
var contador=0;
var acumulado=0;
var promedio=0;
do{
numero=parseInt(prompt('digita un numero'));
    if(numero>0){   
    acumulado=acumulado + numero;
    contador=contador+1;
    console.log(acumulado,contador);
    }else{
    promedio=acumulado/contador;
    alert("promedio " + promedio);
    }
}while(numero>0);