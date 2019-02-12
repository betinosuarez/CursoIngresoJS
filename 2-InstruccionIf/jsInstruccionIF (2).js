function mostrar()
{
	var edadUno;

	edadUno = edad.value;
	edadUno = parseInt(edadUno);

	if (edadUno < 18 )
	{
		alert("Usted es menor de edad, vuelva a la escuela.");
	}
		else
		{	
			alert("Usted es mayor de edad.");
		}
}