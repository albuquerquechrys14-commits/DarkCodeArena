console.log("============CHAMADA POR NOTA============")
const readline = require("readline-sync");

let quantidade = Number(readline.question("Quantos alunos existem na turma? "));

let soma = 0;
let media = 0;
let acima = 0;
let abaixo = 0;

let notas = [];
console.log("");
console.log("===============NOTAS===============")
for (let i = 0; i < quantidade; i++) {
    notas[i] = Number(readline.question("Digite a nota do aluno " + (i + 1) + ": "));
    soma = soma + notas[i];
}


media = soma / quantidade;


for (let i = 0; i < quantidade; i++) {
    if (notas[i] > media) {
        acima++;
    } else if (notas[i] < media) {
        abaixo++;
    }
}
console.log("")
console.log("===============DADOS E RESULTADOS===============");
console.log("Media da turma: " + media.toFixed(2))
console.log("Alunos acima da media: " + acima)
console.log("Alunos abaixo da media: " + abaixo)