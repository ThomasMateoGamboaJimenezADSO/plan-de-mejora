// Multiplicar dos números sin el operador de multiplicación

let multi = 0
let num1 = parseInt(prompt(' digite el numero que se va a multiplicar '));
let num2 = parseInt(prompt(' por cuanto lo va a multiplicar'));

for (let x = 0; x < num2; x++){
    multi = multi + num1
}
console.log(' sin operador ', multi)

let revicion = num1*num2

console.log(' con operador ', revicion)