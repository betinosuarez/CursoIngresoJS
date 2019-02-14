function mostrar()
{
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
// si el pago es con tarjeta y no efectivo al precio final se le agrega un 10% de recargo