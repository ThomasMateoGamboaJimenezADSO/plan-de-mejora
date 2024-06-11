// Dividir dos números sin el operador de la división

let cociente = 0
let num1 = parseInt(prompt(' digite el dividendo '));
let num2 = parseInt(prompt(' digite el divisor (recuerde que este valor debe ser menor al valor anteriormente ingresado) '));

if (num1 > num2) {
  while (num1 > 0) {
    cociente++;
    num1 = num1 - num2
  }
  console.log(' sin operador ', cociente)
}

else {
  alert(' ERROR LOS VALORES SON IMCOMPATIBLES ');
}

let revicion = num1 / num2

console.log(' con operador ', revicion);
