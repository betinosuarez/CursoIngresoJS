function mostrar()
{
	var maximo1 = 0;
	var minimo1 = 0;
	var respuesta='si';

	while(respuesta == "si"){
		
			numero = prompt("Ingrese numero");
			numero = parseInt(numero);
			if(numero > maximo1){
				maximo1 = numero;
			}
			else{
				if(numero < minimo1){
					minimo1 = numero;
				}
			}
			respuesta=prompt("Ingrese "+ "si " + "para continuar");

	maximo.value = maximo1;
	minimo.value = minimo1;
	}




}//Al presionar el botón pedir números hasta que el usuario quiera, mostrar el número máximo y el número mínimo ingresado. 