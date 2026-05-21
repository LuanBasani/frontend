//Estrutura de dados

//Condicionais (if Else // Switch Case)

// IF - ELSE

var precoProduto = 150;
// se preço do produto > 100 - desconto de 10%
if (precoProduto > 100) {
  precoProduto = precoProduto * 0.9;
  console.log("Valor a pagar :" + precoProduto);
} else {
  console.log("Valor a pagar: " + precoProduto);
}
console.log("===========================");
//Condicional intermediaria (else if)
// se preco > 200 15% desc | preco >100 10% desc
if (precoProduto > 200) {
  precoProduto = precoProduto * 0.85;
  console.log("Valor do produto com desconto de 15%: " + precoProduto);
} else if (precoProduto > 100) {
  precoProduto = precoProduto * 0.9;
  console.log("Valor do produto com 10%: " + precoProduto);
} else {
  console.log("Sem desconto: " + precoProduto);
}
console.log("=========================");
// Switch case
var mes = 5;
switch (mes) {
  case 1:
    console.log("Janeiro");
    break;
  case 2:
    console.log("Fevereiro");
    break;
  case 3:
    console.log("Março");
    break;
  case 4:
    console.log("Abril");
    break;
  case 5:
    console.log("Maio");
    break;
  default:
    console.log("Outro Mês");
    break;
}
console.log("===================================");
//estrutura de repetição (for while)
//for (contaveis)
for (let i = 0; i <= 100; i++) {
  console.log(i);
}
console.log("===================================")

// while (incontaveis)
var continuar = true;
var numEscolhido = 3;
var contador = 0;
while (continuar) { //enquanto continuar for verdadeiro, continua o loop
  contador++;
  let numeroSorteado = Math.round(Math.random() * 10 );
  if (numeroSorteado == numEscolhido) {
    continuar = false;
    console.log("Acertou Miseravi");
    console.log("Tentativas = " + contador);
  }
}

console.log("===============================")

//funções (function)
// Ações especificas - podem ser chamadas a qualquer momento dentro do código

function ola(nome){
    return "Olá " + nome

}

console.log(ola("Enzo"))

function hello (nome){ //function void
    console.log("Olá "+ nome)
}

hello("Enzo")
console.log("===============================");

//explicando o Math
//random ( sortear um numero entre 0 e 1)
//exemplo: 0.954321 / 0.23456 / 0.65432
//Math Round - Arredonda para o número para um inteiro