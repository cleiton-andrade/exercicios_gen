const leia = require("readline-sync")

let numero1
let numero2
let opcao

console.log("Digite o 1º número: ")
numero1 = leia.questionFloat()

console.log("Digite o 2ª número: ")
numero2 = leia.questionFloat()

console.log("\n1 - Soma")
console.log("2 - Subtração")
console.log("3 - Multiplicação")
console.log("4 - Divisão")

console.log("Operação: ")
opcao = leia.questionInt()

switch(opcao){
    case 1 :
        console.log(numero1, "+", numero2, "=", (numero1 + numero2))
        break
    case 2 :
        console.log(numero1, "-", numero2, "=", (numero1 - numero2))
        break
    case 3 :
        console.log(numero1, "*", numero2, "=", (numero1 * numero2))
        break
    case 4 :
        console.log(numero1, "/", numero2, "=", (numero1 / numero2))
        break
    default : 
    console.log("Operação Inválida.")
}