/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
 	var primerNumero;
 	var segundoNumero;
 	var suma;

 	primerNumero = numeroUno.value;
 	segundoNumero = numeroDos.value;

 	//alert ( parseInt(primerNumero)+parseInt(segundoNumero) );
 	primerNumero = parseInt(primerNumero);
 	segundoNumero = parseInt(segundoNumero);

 	suma = primerNumero+segundoNumero;
 	alert("El resultado de la suma es "+suma);
}

