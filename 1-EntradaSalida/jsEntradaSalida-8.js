/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/

function SacarResto()
{
    var dividendo;
   
    var divisor;

    var division;

    dividendo = numeroDividendo.value;

    divisor = numeroDivisor.value;

    division = dividendo % divisor;

    alert("El resto es " + division);
}