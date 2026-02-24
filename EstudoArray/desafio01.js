const prompt = require("prompt-sync")();

let notas = [];

console.log("==== Calculadora de Média ====");

let quantidade = Number(prompt("Insira a quantidade de notas que deseja inserir: "));

for (let i = 0; i < quantidade; i++) {
    let nota_nova = Number(prompt(`Insira a ${i + 1}° nota: `));
    notas.push(nota_nova);
}

console.log("Notas digitadas:", notas);

let soma = notas.reduce((somando, valor) => somando + valor, 0)

console.log(`A média das notas é igual a: ${soma/notas.length}`)