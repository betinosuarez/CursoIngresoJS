function mostrar()
/*{
	var productos; 
	var descuentoUno;
	var descuentoDos;
	var totalCompra;
	var limite;
	var metodo;

	descuentoUno = (10/100);
	descuentoDos = (15/100);

	productos = prompt("Ingrese cantidad de productos.");
	productos = parseInt(productos);

	TotalCompra = prompt("Ingrese el monto en pesos.");
	TotalCompra = parseInt(totalCompra);

	metodo = prompt("Ingrese método de pago: 1 para Efectivo, 2 para Tarjeta.");
	metodo = parseInt(metodo);

	if(productos >1){
		totalCompra = totalCompra * descuentoUno;
	}

	if(totalCompra)
}



// al realizar una compra, si compra mas de dos productos se realiza 
// un descuento del 10% y si supera los $2000 se agrega un descuento adicional de 15%,
// si el pago es con tarjeta y no efectivo al precio final se le agrega un 10% de recargo*/

{
	var numeroUno;
	var numeroDos;

	numeroUno = prompt("Ingrese primero número");
	numeroDos = prompt("Ingrese segundo número");

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);


if(numeroUno == numeroDos)
{
	alert(numeroUno+""+numeroDos);
}
else
{
	if(numeroUno > numeroDos)
	{
		alert(numeroUno - numeroDos);
	}
	else
	{
		suma = numeroUno + numeroDos
		if(suma > 10)
		{
			alert(suma);
			alert("La suma es " +suma +" y superó el 10");
		}
		else
		{
			alert(suma); 
		}
	}
}
	
}
/*Pedir dos números y mostrar el resultado: 
	Si son iguales los muestro concatenados. 
	Si el primero es mayor, los resto,
	de lo contrario los sumo. 
	Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje 
	"la suma es xxx y supero el 10".*/