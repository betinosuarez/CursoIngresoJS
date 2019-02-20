function mostrar()
{

var laHora = hora.value;
var mensaje = "";
laHora = parseInt(laHora);

switch(laHora){
	case 7:
	case 8:
	case 9:
	case 10:
	case 11:
				mensaje = "Es de mañana."

	break;
	

}
	if(mensaje != ""){			//habia puesto el if dentro del switch y no funcionaba
		alert(mensaje);
	}
	
	



}