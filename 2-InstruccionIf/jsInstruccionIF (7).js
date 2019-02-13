function mostrar()
{
	var laEdad
	var civil

	laEdad = edad.value;
	laEdad = parseInt(laEdad); //no funcionaba por haber puesto parseInt con P mayúscula

	civil = estadoCivil.value;


	if (laEdad < 18 && civil != "Soltero"){
		alert("Es muy pequeño para NO ser soltero.");
	}	


}