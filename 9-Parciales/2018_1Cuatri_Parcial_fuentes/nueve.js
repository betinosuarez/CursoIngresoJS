function mostrar()
{
	var marca;
	var marcamax;
	var peso;
	var pesomax = 0;
	var pesomin = 101;
	var temperatura;
	var respuesta = "si";
	var tempPar = 0;
	var bajoCero = 0;
	var cantidad = 0;

	while(respuesta == "si")
	{
		marca = prompt("Ingrese marca.");

		peso = prompt("Ingrese peso.");
			while(peso < 1 || peso > 100)
			{
				peso = prompt("Valores menores a 1Kg o mayores a 100Kg no tolerados.");
			}

		temperatura = prompt("Ingrese temperatura");
		while(temperatura < -30 || temperatura > 30)
		{
			temperatura = prompt("Valores menores a -30° o mayores a 30° no tolerados.");
		}
		cantidad ++;

		respuesta = prompt("Ingrese 'si' para agregar otro producto.");
	}

	/*Ifs*/

	if(peso > pesomax)
		{
			pesomax = peso;
			marcamax = marca;
		}
	if(peso < pesomin)
		{
			pesomin = peso;
		}
		
	if(temperatura %2 == 0)
		{
			tempPar ++;
		}

	if(temperatura < 0)
			{
				bajoCero ++;
			}	
	promedio = peso / cantidad;

	/* Alerts */

	document.write("Cantidad de temperaturas pares: " + tempPar + "<br>");
	document.write("Producto más pesado: " + marcamax + "<br>");
	document.write("Productos a menos de 0°C: " + bajoCero + "<br>");
	document.write("Promedio del peso de todos los productos: " + promedio + "<br>");
	document.write("El producto mas pesado es de: " + pesomax + "Kg y el mas liviano es de: " + pesomin + "Kg." );
}


/*
Realizar el algoritmo que permita ingresar la marca del producto,
 el peso el cual debe ser entre 1 y 100 (validar), 
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) La marca del producto más pesado 
c) La cantidad de productos que se conservan a menos de 0 grados. 
d) El promedio del peso de todos los productos.	
f) El peso máximo y el mínimo. */
