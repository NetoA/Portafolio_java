'use strict'
// ejercicio 1
//programa que pida dos numeros y escriba el mayor el menor y si son iguales

var numero1=parseInt(prompt('Digita tu primer numero',0));
var numero2=parseInt(prompt('digita tu segundo numero',0));

while(numero1 >= 0 && numero2 >= 0){
	if(numero1 >numero2){
		console.log('numero1 = '+ numero1 + ' es mayor que numero2 = '+numero2);
	}
	if(numero2>numero1){
		console.log('numero2 = '+ numero2 + '  mayor que numero1 = '+numero1);
	}
	else{
		console.log('numero2 = '+ numero2 + 'es igual que numero1 = '+numero1);
	}
}
