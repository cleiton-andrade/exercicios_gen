const readline = require("readline-sync");

let salarioBruto = readline.questionFloat("Digite o salario bruto: ");
let adicionalNoturno = readline.questionFloat("Digite o valor do adicional noturno: ");
let horasExtras = readline.questionFloat("Digite o valor das horas extras: ");
let descontos = readline.questionFloat("Digite o valor dos descontos: ");

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log("Salário Líquido: " + salarioLiquido.toFixed(2));
