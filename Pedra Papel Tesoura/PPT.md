# Jogo: Pedra, Papel e Tesoura

Um mini-jogo clássico de "Pedra, Papel e Tesoura" (Joquempô) desenvolvido com JavaScript puro (Vanilla JS). O projeto permite que o usuário jogue contra o computador, que faz suas escolhas de forma totalmente aleatória.

##  Funcionalidades Principais

* **Interatividade com o Usuário:** O jogador escolhe sua jogada através de botões na interface. A escolha é processada e exibida visualmente na tela usando emojis (🪨, 📄 ou ✂️).
* **Validação de Jogada:** O sistema impede que o usuário inicie a rodada sem antes ter selecionado uma das três opções, exibindo uma mensagem de alerta.
* **Inteligência Aleatória (Computador):** A escolha do computador é gerada dinamicamente através das funções nativas `Math.random()` e `Math.floor()`, garantindo uma partida justa e imprevisível.
* **Lógica de Decisão:** Uma função dedicada (`decidirVencedor`) avalia as escolhas usando as regras clássicas do jogo para determinar se houve vitória do jogador, vitória do computador ou empate.
* **Feedback Visual em Tempo Real:** O painel atualiza instantaneamente com a escolha de ambos os lados e a mensagem de resultado ("Parabéns, você ganhou! :)", "Que pena! Você perdeu :(" ou "Empate!").
* **Reset Automático (Cooldown):** Após o botão "Play" ser acionado, ele é temporariamente desabilitado para evitar múltiplos cliques (spam). O uso da função `setTimeout` reinicia a interface automaticamente após 1,5 segundos, preparando o jogo para o próximo round de forma fluida.

## Tecnologias e Conceitos Utilizados

* **JavaScript (ES6+):**
  * Manipulação do DOM (`document.querySelector`, `.textContent`).
  * Escuta de Eventos (`addEventListener`).
  * Funções de Temporização assíncronas (`setTimeout`).
  * Manipulação de Arrays e lógica condicional (`if/else`).
* **HTML/CSS:** Estruturação da interface e botões (implícito na manipulação do DOM).

## Como a Lógica Funciona

1. O jogador clica em um botão de escolha, atribuindo um valor numérico à variável `user` (0 para Pedra, 1 para Papel, 2 para Tesoura).
2. Ao clicar em **Play**, o jogo valida a entrada.
3. O computador escolhe um número aleatório entre 0 e 2.
4. Os dois valores (do jogador e do computador) são passados para a função `decidirVencedor`.
5. A tela é atualizada com os resultados e, após 1500ms, o jogo se limpa sozinho para a próxima partida.

## Dificuldades
 * Planejamento da lógica, tanto de decidir o vencedor, quanto para aleatorizar a escolha do computador
 * Temporizador Ant-Spam
---
