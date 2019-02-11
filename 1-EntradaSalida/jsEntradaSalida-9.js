/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var importe;
	var porcentaje;
	var aumento;
	var aumentado;


	importe = sueldo.value;
	importe = parseInt(importe);

	
	porcentaje = (10/100);
	aumento = (importe * porcentaje);

	aumentado = importe + aumento;
	resultado.value = aumentado;
}
