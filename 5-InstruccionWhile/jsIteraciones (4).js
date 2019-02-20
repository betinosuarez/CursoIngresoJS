function mostrar()
{
	var numero = prompt("ingrese un número entre 0 y 10.");

	Numero.value = numero;
	while(numero <0 || numero >10){
		alert("Número fuera de rango");
		Numero.value = ""
		break;
	}
}