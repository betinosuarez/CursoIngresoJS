/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
var numeroIngresado;

function comenzar()
{
	contadorIntentos = 0
	numeroSecreto = Math.floor((Math.random()*100)+1);
}

function verificar()
{
	contadorIntentos = contadorIntentos +1;
	intentos.value = contadorIntentos;
	numeroIngresado = numero.value;
	numeroIngresado = parseInt(numeroIngresado);


	if(numeroIngresado == numeroSecreto && contadorIntentos == 1){
		alert("Usted es un Psíquico! Acertó en " +contadorIntentos +" intentos");
	}
		else{
			if(numeroIngresado == numeroSecreto && contadorIntentos == 2){
				alert("Excelente percepción! Acertó en " +contadorIntentos +" intentos");
			}
			else{
				if(numeroIngresado == numeroSecreto && contadorIntentos == 3){
					alert("Esto es suerte! Acertó en " +contadorIntentos +" intentos");
				}
				else{
					if(numeroIngresado == numeroSecreto && contadorIntentos == 4){
						alert("Excelente técnica! Acertó en " +contadorIntentos +" intentos");
					}
					else{
						if(numeroIngresado == numeroSecreto && contadorIntentos == 5){
							alert("Usted está en la media! Acertó en " +contadorIntentos +" intentos");
						}
						else{
							if(numeroIngresado == numeroSecreto && (contadorIntentos < 11) ){
								alert("Falta técnica! Acertó en " +contadorIntentos +" intentos");
							}
							else{
								if(numeroIngresado == numeroSecreto && contadorIntentos > 10){
									alert("“Afortunado en el amor! Acertó en " +contadorIntentos +" intentos");
								}
								else{
									if(numeroIngresado < numeroSecreto){
										alert("El número secreto es mayor");
									}
									else{
										alert("El número secreto es menor");
										}
									}
								}
							}
						}
					}
				}
			}
}					