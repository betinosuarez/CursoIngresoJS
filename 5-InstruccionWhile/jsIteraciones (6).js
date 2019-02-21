function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;



	while(contador < 5){
		
			numero = prompt("Ingrese numero");
			numero = parseInt(numero);
			contador = contador + 1;
			acumulador = acumulador + numero;
	}


suma.value=acumulador;
promedio.value=acumulador/contador;

}