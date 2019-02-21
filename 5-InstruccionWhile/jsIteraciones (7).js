function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta == "si"){
		
			numero = prompt("Ingrese numero");
			numero = parseInt(numero);
			contador = contador + 1;
			acumulador = acumulador + numero;
			respuesta=prompt("Ingrese "+ "si " + "para continuar");
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN