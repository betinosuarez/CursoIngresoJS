function mostrar()
{
//tomo la edad  
var laHora = hora.value;
var mensaje = "";
laHora = parseInt(laHora);



if(laHora < 0 || laHora > 24){
	alert("La hora no existe");
}
else{

	switch(laHora){
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
					mensaje = "Es de mañana."

		break;

		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
					mensaje = "Es de tarde."
		break;

		default:
					mensaje = "Es de noche."
		}
}
	if(mensaje != ""){
		alert(mensaje);
	}
}