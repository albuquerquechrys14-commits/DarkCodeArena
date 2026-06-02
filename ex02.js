const readline = require('readline-sync')

console.log ("============NOTA DO ALUNO============")
console.log("")
let nota = readline.questionFloat('Digite a nota do aluno (de 0 a 10): ')
console.log ("")
console.log("===============DADOS E RESULTADOS===============")
console.log("")
console.log(`A nota digitada foi: ${nota}`)

if (nota >= 7) {
    console.log("Aluno aprovado")
} else if (nota >= 5 && nota < 7) {
    console.log("Aluno em recuperação")
}else {
    console.log("Aluno reprovado")
}