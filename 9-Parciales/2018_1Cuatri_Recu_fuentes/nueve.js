function mostrar()
{
	/*var nombre;
	var nombremax;
	var peso;
	var pesomax = 0;
	var temp = 0;
	var tempmax;
	var temppar;
	var subzero;
	var minzero;
	var maxzero;
	var cuenta;
	var respuesta = "si";

	while(respuesta = "si"){
		
			nombre = prompt("Ingrese nombre del animal.");
			temp = prompt("Ingrese temperatura de su hábitat.")
			while(temp <-30 || temp > 30){
				temp = prompt("Temperaturas menores a -30º o mayores a 30º no toleradas.");
			}
			peso = prompt("Ingrese el peso del animal.");
			while(peso > 1000 || peso < 1){
				peso = prompt("Pesos menores a 1Kg o mayores a 1Tn no tolerados.");
				if(peso > pesomax){
					pesomax = peso;
					nombremax = nombre;
					tempmax = temp;
				}
			}
			respuesta=prompt("Ingrese "+ "si " + "para cargar datos de otro animal.");*/

	var nombre;
	var nombremax;
	var temp;
	var tempmax;
	var peso;
	var sumapeso = 0;
	var pesomax = 0;
	var subzero = 0;
	var pesomaxsubzero = 0;
	var pesominsubzero = 1001;
	var promedio;
	var temppares = 0;
	var respuesta = "si";

	for(contador = 1; respuesta == "si"; contador++)
	{
		nombre = prompt("Ingrese nombre del animal.");
		temp = prompt("Ingrese temperatura de su hábitat.");
		temp = parseInt(temp);
		while(isNaN(temp) || temp <-30 || temp > 30)
		{
			temp = prompt("Temperaturas menores a -30º o mayores a 30º no toleradas.");
			temp = parseInt(temp);
		}

		peso = prompt("Ingrese el peso del animal.");
		peso = parseInt(peso);		
		while(isNaN(peso) || peso > 1000 || peso < 1)
		{
			peso = prompt("Pesos menores a 1Kg o mayores a 1Ton no tolerados.");
			peso = parseInt(peso);
		}		

		sumapeso = sumapeso + peso;
		if(temp%2 == 0)
		{
			temppares = temppares +1;
		}

		if(peso > pesomax)
			{
				pesomax = peso;
				nombremax = nombre;
				tempmax = temp;
			}

		if(temp < 0)
		{
			subzero = subzero +1;
			if(peso > pesomaxsubzero)
			{
				pesomaxsubzero = peso;
			}
			if(peso < pesominsubzero)
			{
				pesominsubzero = peso;
			}
		}
		respuesta = prompt("Ingrese "+ "si " + "para cargar datos de otro animal.");
	}

	promedio = sumapeso / contador;

	document.write("La cantidad de temperaturas pares es: " + temppares);
	document.write("El animal más pesado es " +nombremax + " con un peso de " +pesomax +" y temperatura habitat de " +tempmax +"°C.");
	document.write(subzero +" animales viven a menos de 0°C.");
	document.write("El peso promedio de todos los animales es de " +promedio +"Kg.");
	document.write("El máximo peso entre los animales que viven bajo cero es de " +pesomaxsubzero +" y el minimo es de " +pesominsubzero);
}	
/*a) La cantidad de temperaturas pares. 
b) El nombre y temperatura del animal más pesado 
c) La cantidad de animales que viven a menos de 0 grados. 
d) El promedio del peso de todos los animales.	
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.*/