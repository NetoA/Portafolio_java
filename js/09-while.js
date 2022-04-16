'use strict'

// bucle while

var year = 2048;

while(year <= 2051){
	// ejecuta esto
	console.log("estamos en el año z: " + year);

	year++;

}
var year = 1993;

while(year >= 1991){
	// ejecuta esto
	console.log("estamos en el año x: " + year);

	year--;

}

// do while

var years = 27;

do{
	alert("solo cuando sea mayor a 25 - valor " + years);
		years--;

}while(years >25)

// uso de break

var year = 2005;

while(year != 1998){
	// ejecuta esto
	console.log("uso del break estamos en el año: " + year);

	if(year == 1996){;
		break;
	}
	year--;
}
var x=1;
do{
	console.log("esta prueba es cuando "+ x +" es mayor que 10");
	x++;
}while(x<3);

x=1;
while(x<3){
	console.log("esta 2da. prueba es cuando "+ x +" es mayor que 10");
	x++;
}