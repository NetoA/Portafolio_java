'use strict'

// switch
var edad = 140;
var imprime ="";
switch(edad){
	case 18:
		imprime = "Acabas de cumplir la mayoria de edad";
	break;
	case 25:
		imprime = "Ya eres un adulto";
	break;
	case 40:
		imprime = "Estas en la crisis de los 40";
	break;
	case 75:
		imprime = "Lo mejor esta por venir viejito";
	break;
	default:
		imprime = "tu edad es " + edad;
	break;
}

console.log(imprime);