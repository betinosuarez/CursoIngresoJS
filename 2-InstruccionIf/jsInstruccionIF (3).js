function mostrar()
{
	var laEdad;

	laEdad = edad.value
	laEdad = parseInt(laEdad);

	if (laEdad <18){
		alert("Usted es menor de edad.");
	}
	
	if (laEdad >17){
		alert("Usted es mayor de edad.");
	}

}