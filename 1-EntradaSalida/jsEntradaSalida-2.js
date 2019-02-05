/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre = prompt("Por favor ingrese un nombre");
	alert("El nombre ingresado fue " +nombre); //olvidé el "+" para concatenar el valor de "nombre" a la alerta.
}

