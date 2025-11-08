const leia = require("readline-sync")

let nome
let idade
let doacao

console.log("Digite o nome do doador: ")
nome = leia.question()

console.log("Digite a idade do doador: ")
idade = leia.questionInt()

doacao = leia.keyInYNStrict("Primeira doacao de sangue? ") // para opção verdadeiro ou falso y/n?

if (idade < 18 || idade > 69){
    console.log(nome + " Não está apto a doar sangue")
}else if((idade >=60 && idade < 69) && doacao == true){
    console.log(nome + " Não está apto a doar sangue")
}else{
    console.log(nome + " Esta apto a doar sangue")
}