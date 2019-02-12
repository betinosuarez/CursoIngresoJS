function mostrar()
{
 	var laEdad;

	laEdad = edad.value
	laEdad = parseInt(laEdad);

	if (laEdad > 17){
		alert("Usted es mayor de edad.");
		}
		else{
			if (laEdad <12){
				alert("Usted es un niño.");
				}
				else{
					alert("Usted es adolescente.");
				}
			}
		}