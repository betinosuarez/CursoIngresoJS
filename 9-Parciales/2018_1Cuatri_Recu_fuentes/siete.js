function mostrar()
{
	var notaing;
	var contador = 0;
	var m = 0;
	var sexo;
	var sumanotas = 0;
	var minima;
	var promedio;
	var sexMinima;

	while(contador < 3){
		notaing = prompt("Ingrese nota del alumno.");
		notaing = parseInt(notaing);

		while(isNaN(notaing) == true || notaing <0 || notaing >10){
		notaing = prompt("Numero no valido, ingrese notas entre 0 y 10");
		}
		sumanotas = sumanotas + notaing;
		minima = notaing;

		sexo = prompt("Ingrese sexo del alumno. (F o M)");

		while(isNaN(sexo) == false || sexo != "f" && sexo != "m"){
			sexo = prompt("Error: por favor ingrese " +"F " +" para femenino o " +"M " +" para masculino.");
			}

	if(sexo == m && notaing >5){
		m = m +1;
	}
	if(notaing < minima){
		minima = notaing;
		sexMinima = sexo;
	}
		contador = contador +1;
	}
	promedio = sumanotas / contador;
	if(sexMinima == m){
		sexMinima = masculino;
	}
	else{
		sexMinima = femenino;
	}

	alert("El promedio de las notas es " + promedio +"." +" La nota mas baja es " +minima +" de un/a alumno " +sexMinima +". " +m +"varones sacaron nota mayor a 6.");
	
} /*Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) ,
	 el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6. */
