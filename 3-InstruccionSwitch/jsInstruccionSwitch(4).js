function mostrar()
{ 
var mesDelAño = document.getElementById('mes').value;
var mensaje = "";

switch(mesDelAño){
	case "Febrero":
					mensaje = "Este mes tiene 28 días."
	break;  //si no pongo este break, Febrero me da 30 dias

	case "Noviembre":
	case "Abril":
	case "Junio":
	case "Septiembre":
					mensaje = "Este mes tiene 30 días."
	break;

	default:
			mensaje = "Este mes tiene 31 días."
	break;

}
	if(mensaje != ""){
	alert(mensaje);
	}
	

	
	



}