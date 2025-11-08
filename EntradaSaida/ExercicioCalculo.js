const readline = require("readline-sync")

let n1 
let n2
let n3
let n4

let diferenca

console.log("Digite n1: ")
n1 = readline.questionFloat()

console.log("Digite n2: ")
n2 = readline.questionFloat()

console.log("Digite n3: ")
n3 = readline.questionFloat()

console.log("Digite n4: ")
n4 = readline.questionFloat()

diferenca=(n1*n2)-(n3*n4)
console.log("Calculo: " + diferenca)