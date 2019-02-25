function mostrar()
{
	var recorrido;
	var numeroIngresado;
	var acumulador = 0;
	numeroIngresado = prompt("Ingrese numero.");

	for(recorrido=numeroIngresado -1; recorrido >1; recorrido --){
		for(numeroAnterior = recorrido -1; numeroAnterior >0; numeroAnterior --){
			if(numeroIngresado % numeroAnterior == 0){
				acumulador = acumulador + numeroAnterior;
			}
		}
		if(acumulador == numeroIngresado){
			console.log("Es perfecto " + numeroIngresado);
		}
	}
}//buscamos numeros perfectos.