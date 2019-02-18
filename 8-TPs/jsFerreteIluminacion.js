/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var numero;
 	var modelo;
 	var precio;
 	var impuesto;

 	modelo = Marca.value; 
 	precio = 35
 	numero = Cantidad.value;
 	total = precio * numero;

 	if(numero > 5){									//6 lamparas
 		precio = precio * numero;
 		precio = precio + precio * 0.5;
 	}
 	else{
 		if(numero == 5 && modelo == ArgentinaLuz){ //5 lamparas
 			precio = precio * numero;
 			precio = precio + precio * 0.4;
 		}
 		else{
 			precio = precio * numero;
 			precio = precio + precio * 0.3;
 		}
 		if(numero == 4 && modelo == ArgentinaLuz || numero == 4 && modelo == FelipeLamparas){
 			precio = precio * numero;
 			precio = precio + precio * 0.25;
 		}
 		else{
 			precio = precio * numero;
 			precio = precio + precio * 0.2;
 		}
 		if(numero == 3 && modelo == ArgentinaLuz){
 			precio = precio * numero;
 			precio = precio + precio * 0.15;
 		}
 		else{
 			if(numero == 3 && modelo == FelipeLamparas){
 				precio = precio * numero;
 				precio = precio + precio * 0.1;
 			}
 			else{
 				precio = precio * numero;
 				precio = precio + precio * 0.05;
 			}
 		}


 		if(precio > 120){
 			impuesto = precio * 0.1;
 			precio = precio + impuesto;
 			precioDescuento.value = precio;
 			alert("Usted pagó $" + impuesto + "de Ingresos Brutos.");
 		}
 		else{
 			precioDescuento.value = precio;
 		}
 	}
}
