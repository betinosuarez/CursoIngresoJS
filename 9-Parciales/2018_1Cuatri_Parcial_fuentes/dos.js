function mostrar()
{
  var precio;
  var porcentaje;
  var recargo;
  var final;

  precio = prompt("Ingrese precio del producto");
  precio = parseInt(precio);

  porcentaje = (10/100);

  recargo = (precio * porcentaje);

  final = precio + recargo;


  alert ("el precio del producto en efectivo es: $" +precio +", con tarjeta tiene un recargo del 10% que seria $" +recargo +" de recargo, costandole final $" +final +".");
}
