
function mostrar()
{
	var nombreUno;
	var nombreDos;
	var edadUno;
	var edadDos;
	var sumaEdad;


	nombreUno = prompt("Primer usuario ingrese su nombre.");
	edadUno = prompt("Ahora ingrese su edad.");
	edadUno = parseInt(edadUno);
	nombreDos = prompt("Segundo usuario ingrese su nombre.");
	edadDos = prompt("Ahora ingrese su edad.");
	edadDos = parseInt(edadDos);
	sumaEdad = (edadUno + edadDos);
	alert("Ustedes son " +nombreUno +" y " +nombreDos +", sus edades son " +edadUno +" y " +edadDos +", y la suma de sus edades es " +sumaEdad)
}
