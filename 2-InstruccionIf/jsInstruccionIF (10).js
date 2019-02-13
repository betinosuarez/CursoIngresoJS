function mostrar()
{
	var nota

	nota = Math.floor((Math.random()*10)+1);
	

	if (nota >8){
		alert("Exelente! Su nota es un " +nota);
	}
	else{
		if (nota >3){
			alert("Aprobó! Su nota es un " +nota);
		}
		else{
			alert("Vamos, la próxima se puede! Su nota fue un " +nota);
		}
	}
	

}//FIN DE LA FUNCIÓN