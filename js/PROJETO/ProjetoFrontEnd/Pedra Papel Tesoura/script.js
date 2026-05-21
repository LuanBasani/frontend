const opcoes = ["pedra", "papel", "tesoura"]
const pedra = document.querySelector("#btnPedra");
const papel = document.querySelector("#btnPapel");
const tesoura = document.querySelector("#btnTesoura");
const play = document.querySelector("#btnPlay");
const playerDisplay = document.querySelector("#player-choice");
const compDisplay = document.querySelector("#comp-choice");

let user = null;
let comp = null;

// Atribuindo escolha do usuario
pedra.addEventListener("click", () => {
  user = 0;
  playerDisplay.textContent = "🪨";
});

papel.addEventListener("click", () => {
  user = 1;
  playerDisplay.textContent = "📄";
});

tesoura.addEventListener("click", () => {
  user = 2;
  playerDisplay.textContent = "✂️";
});


play.addEventListener("click", () => {
  if (user === null) {
    const msg = "Erro! Selecione uma das opçôes!";
    console.log(msg);
    document.querySelector("#result-messageText").textContent = msg;
    return;
  }
  // Atribuindo escolha do computador
  comp = Math.floor(Math.random() * 3);
  console.log(`Pc escolheu ${opcoes[comp]}`);
  const msg = decidirVencedor(user, comp);
  console.log(msg);
  document.querySelector("#result-messageText").textContent = msg;

  const emojis = ["🪨", "📄", "✂️"];
  compDisplay.textContent = emojis[comp];
  user = null;
  comp = null;

  play.disabled = true;


  setTimeout(() => {
    playerDisplay.textContent = "?";
    compDisplay.textContent = "?";
    document.querySelector("#result-messageText").textContent =
      "Preparado para o próximo round?";

    user = null;
    comp = null;
    play.disabled = false;
  }, 1500);
});
// Lógica para decisão de vencedor
function decidirVencedor(user, comp) {
  if (user == comp) {
    return "Empate! Tente novamente";
  } else if (comp == 0 && user == 1) {
    return "Parabens, você ganhou! :)";
  } else if (comp == 1 && user == 2) {
    return "Parabens, você ganhou! :)";
  } else if (comp == 2 && user == 0) {
    return "Parabens, você ganhou! :)";
  } else {
    return "Que pena! Você perdeu :(";
  }
}