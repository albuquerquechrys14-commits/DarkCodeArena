const readline = require('readline-sync')

console.log ("============LOJA DO TO CONFUSA============")

let compra = readline.questionFloat('Quanto foi gasto na compra? R$')

console.log ("")
console.log("===============DADOS E RESULTADOS===============")
console.log ("")
console.log(`O valor original da compra foi: R$${compra}`)

if (compra > 500) {
    console.log("Desconto de 20%")
    let valorFinal = compra - (compra * 0.20)
    console.log(`O valor final da compra é: R$${valorFinal.toFixed(2)}`)
} else if (compra >= 200 && compra <= 500) {
    console.log("Desconto de 10%")
    let valorFinal = compra - (compra * 0.10)
    console.log(`O valor final da compra é: R$${valorFinal.toFixed(2)}`)
} else {
    console.log("Sem desconto, pobre")
}