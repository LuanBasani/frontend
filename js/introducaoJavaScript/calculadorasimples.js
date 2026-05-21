var prompt = require("prompt-sync")();

//funções - Operações
//soma
function soma(a, b){
    return (a+b);
}
//subtração
function sub(a,b){
    return (a-b);
}
//multiplicação
function multi(a,b){
    return (a*b);
}
//divisão
function div(a,b){
    return (a/b);
}

function menu(){
  let operacao;
  let numero1;
  let numero2;
  let resultado;
  console.log("===========calculadora simples===========");
  console.log("| 1. Soma                ");
  console.log("| 2. Subtração           ");
  console.log("| 3. Multiplicação       ");
  console.log("| 4. Divisão             ");
  console.log("=========================");
  operacao = prompt("Escolha uma operação (1-4): "); //recebeo valor digitado para a opção
  numero1 = Number(prompt("Digite o 1º Número:")); //recebe o nº1
  numero2 = Number(prompt("Digite o 2º Número:")); //recebe o nº 2

  switch (operacao) {
    case "1":
      resultado = soma(numero1, numero2);
      console.log("Resultado: " + resultado);
      break;
    case "2":
      resultado = sub(numero1, numero2);
      console.log("resultado : " + resultado);
      break;
    case "3":
      resultado = multi(numero1, numero2);
      console.log("Resultado: " + resultado);
      break;
    case "3":
      resultado = multi(numero1, numero2);
      console.log("Resultado: " + resultado);
      break;
    case "4":
      resultado = div(numero1, numero2);
      console.log("Resultado: " + resultado);
      break;
    case "3":
      resultado = multi(numero1, numero2);
      console.log("Resultado: " + resultado);
      break;
    case "4":
      if (numero2 === 0) {
        console.log("Erro: Divisão por zero não é permitida.");
      } else {
        resultado = div(numero1, numero2);
        console.log("Resultado: " + resultado);
      }
      break;

    default:
      console.log("Opção inválida!");
      break;
  }
}


var continuar = true;
while (continuar) {
menu();
let escolha = prompt("1. Continuar // 2. Sair \nDigite sua escolha: ");
if (escolha == 2) {
    continuar = false;
    console.log("Saindo...");
}
}
  
