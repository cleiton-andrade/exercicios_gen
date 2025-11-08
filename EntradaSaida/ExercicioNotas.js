const readline = require("readline-sync")

let nota1
let nota2
let nota3
let nota4

let media

console.log("Digite a primeira nota: ")
nota1=readline.questionFloat()

console.log("Digite a segunda nota: ")
nota2=readline.questionFloat()

console.log("Digite a terceira nota: ")
nota3=readline.questionFloat()

console.log("Digite a quarta nota: ")
nota4=readline.questionFloat()

media=(nota1 + nota2 + nota3 + nota4) / 4
console.log("Média final: " + media)