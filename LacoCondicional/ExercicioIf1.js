const leia = require("readline-sync")

let numero1
let numero2
let numero3

console.log("Digite o primeiro numero: ")
numero1 = leia.questionInt()

console.log("Digite o segundo valor: ")
numero2 = leia.questionInt()

console.log("Digite o terceiro valor: ")
numero3 = leia.questionInt()

if ((numero1 + numero2) > numero3){
    console.log(numero1, " + ", numero2, " = ", (numero1+numero2), ">", numero3)
    console.log("A soma de A + B é maior que C ")
}else if((numero1+numero2) < numero3){
    console.log(numero1, " + ", numero2, " = ", (numero1+numero2), "<", numero3)
    console.log("A soma de A + B é menor que C ")
}else{
    console.log(numero1, " + ", numero2, " = ", (numero1+numero2), "=", numero3)
    console.log("A soma de A + B é igual que C ")
}

