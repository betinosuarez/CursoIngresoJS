function mostrar()
/*{
	var numeroIngresado;
	var numeroAnterior;

	numeroIngresado = prompt("Ingrese numero.");
	for(numeroAnterior = numeroIngresado - 1; numeroAnterior > 1; numeroAnterior --){;

		if(numeroIngresado % numeroAnterior == 0){
			break;
		}
	}

	if(numeroAnterior == 1){
		console.log("Es primo");
	}
	else
		console.log("no es primo");
}//buscamos numeros primos con for */


{
	var recorrido;
	var numeroIngresado;

	numeroIngresado = prompt("Ingrese numero.");

	for(recorrido=numeroIngresado -1; recorrido >1; recorrido --){
		for(numeroAnterior = recorrido -1; numeroAnterior +1; numeroAnterior --){
			if(recorrido % numeroAnterior == 0){
				break;
			}
		}
		if(numeroAnterior == 1){
			console.log("Es primo" + recorrido);
		}
	}
} //buscamos todos los primos

