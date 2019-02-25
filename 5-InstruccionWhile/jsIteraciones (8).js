function mostrar()
{

	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

	while(respuesta == "si"){
		
			numero = prompt("Ingrese numero");
			numero = parseInt(numero);
			if(numero >0){
				positivo = positivo + numero;
			}
			else{
				negativo = negativo * numero;
			}
			respuesta=prompt("Ingrese "+ "si " + "para continuar");
	}


	suma.value=positivo;
	producto.value=negativo;

}//Al presionar el botón pedir números hasta que el usuario quiera, sumar los que son positivos y multiplicar los negativos. 