const prompt = require("prompt-sync")();

let sorteio = Math.round(Math.random() * 101); // 0 a 100
let contador = 0;
let tentativa = 0;
let opcao = "";

tentativa = Number(prompt("Informe o número aleatório (0 a 100): "));
contador++;

while (opcao !== "n") {
  if (tentativa === sorteio) {
    opcao = prompt(
      "Parabéns, você acertou o número em " +
        contador +
        " tentativas! Deseja jogar novamente? (y/n): ",
    ).toLowerCase();

    if (opcao === "y") {
      sorteio = Math.round(Math.random() * 101);
      contador = 0;
      tentativa = Number(prompt("Informe o número aleatório (0 a 100): "));
      contador++;
    }
  } else if (tentativa > sorteio) {
    tentativa = Number(prompt("O número sorteado é menor. Tente novamente: "));
    contador++;
  } else {
    tentativa = Number(prompt("O número sorteado é maior. Tente novamente: "));
    contador++;
  }
}

console.log("Obrigado por jogar!");
