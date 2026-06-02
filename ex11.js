const readline = require('readline-sync')


let positivo = readline.questionInt('Digite um numero positivo: ')

let fatorial = 1

for (let i = 1; i <= positivo; i++){
fatorial *= i
}

console.log (`o fatorial do ${positivo} é: ${fatorial}`)
