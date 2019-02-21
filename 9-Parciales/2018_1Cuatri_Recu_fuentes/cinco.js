function mostrar()
{
	var precio;
	var metodo;
	var paquete;
	var porcentaje;
	var porcentaje1;

	precio = prompt("Ingrese precio de la habitación.");
	paquete = promt("Elija un paquete: 1) Todo Incluido. 2) Sólo Desayuno.")
	metodo = promt("Ingrese método de pago: 1) Visa. 2) MercadoPago. 3) Paypal. 4) Efectivo. 5) Otro.");

	precio = parseInt(precio);
	metodo = parseInt(metodo);

	switch(metodo){

		case 1:
		case 2:
				porcentaje = 0.1;
				break;
		case 3:
				switch(paquete){

					case 1:
							porcentaje1 = 0.15;
							break;
					case 2: 
							porcentaje1 = 0.1;
							break;
				}
		case 4: 
				porcentaje = 0.2;
				break;
		default:
				porcentaje = 0.05;
				break;

	precio = precio * porcentaje;


	}







	/* cada habitacion de un hotel tiene un precio, hay promociones segun el tipo de pago,
	 si es con tarjeta visa un 10 %, si es por paypal un 15%, 
	 por mercadopago un 10%, efectivo un 20%, cualquier otro medio solo un 5%.
	 si compraste el paquete "todoIncluido" y pagas con paypal se te suma un 10% al descuento.
	 si pagas en efectivo, tenes varias opciones, el paquete "soloDesayunos" te suma un 10% al
	 descuento, si el paquete es "todoIncluido" te suma un 15% y para el resto de los paquetes
	 no hay descuento adicional./*
}
