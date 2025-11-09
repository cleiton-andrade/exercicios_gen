const leia = require("readline-sync")

let x = 0
let y = 0
let idade = 0



while(idade >= 0) { // dentro do parenteses temos os parametros
    console.log("Digite uma idade: ")
    idade = leia.questionInt()

    if (idade < 21 && idade > 0){
        x ++
    }else if (idade > 50){
        y ++
    }
}

console.clear()

console.log("Total de pessoas menores de 21 anos: " + x)
console.log("Total de pessoas maiores de 50 anos: " + y)