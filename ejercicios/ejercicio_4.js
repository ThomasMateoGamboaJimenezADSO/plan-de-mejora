// Elevar un numero entero a su potencia sin utilizar el operador de la potencia

let num1 = parseInt(prompt(' digite el numero que se va a potenciar '));
let num2 = parseInt(prompt(' por cuanto lo va a pontenciar '));
let pont = num1

for (let x = 1; x < num2; x++){
    pont = pont * num1
    console.log(' sin operador ', pont)
}


let revicion = num1**num2

console.log('con operador', revicion)