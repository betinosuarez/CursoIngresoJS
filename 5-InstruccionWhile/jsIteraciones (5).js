function mostrar()
{
	var sexo = prompt("ingrese f ó m .");

	Sexo.value = sexo;
	while(sexo != "f" || sexo != "m"){  //habia puesto && en vez de ||
		alert("Dato no válido");
		Sexo.value = ""
		break;
}
}