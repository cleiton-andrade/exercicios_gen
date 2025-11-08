const leia = require("readline-sync")


let n1 = leia.questionInt("Digite o primeiro numero do intervalo: ")
let n2 = leia.questionInt("Digite o ultimo numero do intervalo: ")


if (n1 > n2){
    console.log("Intervalo invalido!")
}


for(let inicio = n1; inicio <= n2; inicio++){ //loop / laço de repetição
    if (inicio % 3 == 0 && inicio % 5 == 0){ // utilizaão das variaveis par estabelecer o inicio e fim do laço de repetição
    console.log(inicio + " é multiplo de 3 e 5")
    }
}


