import leia = require("readline-sync")

const listaNumeros : Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6])


console.log("Lista:", Array.from(listaNumeros))
let numero : number
console.log("Digite o número que você deseja encontrar: ")
numero = leia.questionInt()

let encontrar : boolean = listaNumeros.has(numero)

if(encontrar){
    console.log("O número", numero," foi encontrado! ")
}else{
    console.log("Não foi encontrado!")
}
