//Restar dos números sin utilizar el operador de resta.

let num1 = parseInt(prompt(' digite el numero que se va a restar '));
let num2 = parseInt(prompt(' digite el valor que se le va arestar (recuerde que este valor debe ser menor al valor anteriormente ingresado)'));

if (num1 > num2) {
    for (let x = 0; x < num2; x++){
        num1 --;
    }
    console.log(' sin operador ', num1);
}

else{
    alert(' ERROR LOS VALORES SON IMCOMPATIBLES ')
}

console.log(num1, num2)
let revicion = num1-num2

console.log(' con operador ', revicion)