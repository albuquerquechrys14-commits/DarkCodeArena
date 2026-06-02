const readline = require('readline-sync')
 
let contadorPositivo = 0

for (let i = 1; i <= 10; i++ ){
 let positivo = readline.questionInt (`Digite o ${i}º numero: `)
if (positivo > 0){
    contadorPositivo ++
}
}

console.log(`os numeros positvos digitados foram: ${contadorPositivo}`)