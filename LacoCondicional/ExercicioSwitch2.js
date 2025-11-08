const leia = require("readline-sync")

let saldo = 1000.00
let saque
let deposito
let operacao

console.log("\n1 - Saldo")
console.log("2 - Saque")
console.log("3 - Depósito")

console.log("Digite a operação: ")
operacao = leia.questionInt()

switch (operacao){
    case 1 :
        console.log("Saldo: R$" + saldo)
    break
    case 2 :
        console.log("Digite o valor que deseja sacar: ")
        saque = leia.questionFloat()
        if (saque > saldo){
            console.log("Saldo insulficiente")
        }else{
            console.log("Novo saldo: " + (saldo - saque))
        }
    break
    case 3 :
        console.log("Digite o valor do depósito: ")
        deposito = leia.questionFloat()
        console.log("Novo saldo: " + (saldo + deposito))
    break
    default :
        console.log("Operação inválida!")
}