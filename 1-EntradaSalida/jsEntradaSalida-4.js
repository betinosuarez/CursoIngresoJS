/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;

	nombre = prompt("Por favor ingrese un nombre");
 // elNombre.value = nombre;
 document.getElementById("elNombre").value = nombre; // ambas lineas 10 y 11 cumplen misma funcion.
}

