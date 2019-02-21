function mostrar()
{
	var importe1;
	var importe2;
	var importe3;
	var importe4;
	var suma;
	var operacion;
	var mayor;
	var ingreso;

	importe1 = prompt("ingrese 1er Importe.");
	importe2 = prompt("ingrese 2do Importe.");
	importe3 = prompt("ingrese 3er Importe.");
	importe4 = prompt("ingrese 4to Importe.");

	importe1 = parseInt(importe1);
	importe2 = parseInt(importe2);
	importe3 = parseInt(importe3);
	importe4 = parseInt(importe4);

	mayor = importe1;
	if(importe2 > importe1){
		mayor = importe2;
	}

	
	suma = (importe1 + importe2 + importe3 + importe4);

	if(suma > 100){
		operacion = (suma * 0.1);
	}
	else{
		if(suma >50){
			operacion = (suma * 0.05);
		}
		else{
			operacion = (suma * 0.15);
		}


	}
	/*prompt("ingrese 1er Importe.");
	prompt("ingrese 2do Importe.");
	prompt("ingrese 3er Importe.");
	prompt("ingrese 4to Importe.");

	importe1 = parseInt (importe1);
	importe2 = parseInt (importe2);
	importe3 = parseInt (importe3);
	importe4 = parseInt (importe4);

	alert("importe1" + "importe2" + "importe3" + "importe4");*/


}
