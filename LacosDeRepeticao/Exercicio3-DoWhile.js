const leia = require("readline-sync")

let valor
let soma = 0


do {
    console.log("Digite um numero: ")
    valor = leia.questionInt()

    if(valor >0){
        soma += valor
    }

    }while(valor !=0)

    console.log("A soma dos numeros positivos é: " + soma)