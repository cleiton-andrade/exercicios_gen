import leia = require("readline-sync")

const cores : Array<string> = new Array(5)

for (let i = 0; i<5; i++){
    console.log("Digite a cor: ")
    cores[i] = leia.question()
}

console.clear()

console.log("Listar todas a cores: ")
for (let cor of cores){
    console.log(cor)
}

console.log("\nOrdenar cores: ")
cores.sort()
for (let cor of cores){
    console.log(cor)
}