function mostrar()
{
	var nombre;
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
			respuesta=prompt("Ingrese "+ "si " + "para cargar datos de otro animal.");
}
/*a) La cantidad de temperaturas pares. 
b) El nombre y temperatura del animal más pesado 
c) La cantidad de animales que viven a menos de 0 grados. 
d) El promedio del peso de todos los animales.	
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.*/