const readline = require("readline-sync");

let salario = parseFloat(readline.question("Digite o salário: "));
let abono = parseFloat(readline.question("Digite o abono: "));

let novoSalario = salario + abono;

console.log("Novo Salário: " + novoSalario.toFixed(2));
