function mostrar()
{
	var sexo = prompt("ingrese f ó m .");

	Sexo.value = sexo;
	while(sexo != "f" || sexo != "m"){
		alert("Dato no válido");
		Sexo.value = ""
		break;
}
}